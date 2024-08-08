import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { VerseInfo } from 'src/interface/verse';

@Injectable()
export class BibliaService {
  private getJsonData(filePath: string): any {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      throw new Error(`Error reading JSON file at ${filePath}: ${err.message}`);
    }
  }
  getVerse(
    testament: 'taloha' | 'vaovao',
    book: string,
    chapter: number,
    start?: number,
    end?: number,
  ): VerseInfo[] {
    const p = path.join(
      __dirname,
      '..',
      `Testamenta/${testament}`,
      `${book}.json`,
    );
    const bookContent = this.getJsonData(p);
    const st: number = start ? start : 1;
    const ed: number = end ? end : st;
    const retour: VerseInfo[] = [];

    if (bookContent && bookContent[chapter]) {
      const chapterContent = bookContent[chapter];

      for (let verseNum = st; verseNum <= ed; verseNum++) {
        const verseText = chapterContent[verseNum];
        if (verseText) {
          retour.push({
            book,
            chapter,
            verse: verseNum,
            text: verseText,
          });
        }
      }
    }

    return retour;
  }
}
