/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Content, Language } from './types';

export const contentData: Record<Language, Content> = {
  he: {
    nav: { home: 'דף הבית', about: 'אודות', services: 'שירותים', contact: 'צור קשר' },
    hero: {
      title: 'קריסטינה פוליצר מימון – עורכת דין ונוטריונית',
      subtitle: '**מומחית לדין ההונגרי** | 🇮🇱 ישראל ↔ הונגריה 🇭🇺',
      cta: 'ליצירת קשר',
    },
    about: {
      title: 'אודות המשרד',
      content: [
        'עו"ד ונוטריון קריסטינה פוליצר מימון נולדה בהונגריה, סיימה לימודי תואר ראשון ותואר שני במשפטים בהונגריה ובארה"ב, והינה בין הבודדים בישראל העוסקים בתחום שגם כותבת ודוברת את השפה ההונגרית.',
        'סיפורם המשותף של עו"ד קריסטינה פוליצר מימון והדר מימון החל בפקולטה למשפטים בבודפשט שבהונגריה, שפתחה אז לראשונה את שעריה למערב. קריסטינה הגיעה ממשפחה של עורכי דין — שני הוריה עוד היו סטודנטים כאשר נולדה, ומיומה הראשון "למדה" יחד איתם את שיעוריה הראשונים בתורת המשפט. הדר, לימים בעלה, הגיע בשנת 1990 מישראל. הוא עסק בתיווך נדל"ן וסחר בינלאומי במקביל ללימודיו, ולקח חלק בפעילות הכלכלית התוססת שאפיינה את כניסתן של חברות בינלאומיות רבות מהמערב למזרח אירופה.',
        'לאחר שסיימה תואר שני בהונגריה ובארצות הברית, עו"ד פוליצר מימון עלתה לישראל, ועברה את ההתמחות ואת מבחני לשכת עורכי הדין. עם הסמכתה היא עבדה במשרדים מובילים בתחומים האזרחיים והמסחריים, בדגש על דיני עבודה, ובהמשך הוכשרה כנוטריונית. כיום, לצד מתן ייעוץ וחוות דעת בדין ההונגרי ללקוחות לבתי המשפט, עו"ד פוליצר מימון משמשת כמומחית מטעם בתי המשפט ומייעצת למשרדי עורכי דין המעוניינים בכך, לרבות בתביעות מורכבות וייצוגיות. היא גם מוסמכת לתת שירות של אימות ואפוסטיל למסמכים המשפטיים שהיא מתרגמת.',
        'עו"ד פוליצר מימון היא מגשרת מוסמכת מטעם לשכת עורכי הדין ומשמשת כנציגת ציבור בבית הדין לעבודה בתל-אביב יפו.',
        'ההיכרות עם החוק ההונגרי והחוק הישראלי מאפשרת כיום לבני הזוג לייצג לקוחות מסחריים ופרטיים משתי המדינות בסוגיות אזרחיות שונות, בהן עריכת צוואות; ניהול עיזבונות; קבלת נכסי ירושה בישראל או בהונגריה; הליכי קנייה או מכירה של נכסים בהונגריה (ובישראל); הקמת חברות והתנעת משרדי ייצוג אינטרסים מקומי עבור חברות לצורכי פיתוח ושיווק (בהיי-טק). לא פעם השניים מסייעים גם באיתור וליווי שיתופי פעולה מסחריים בין חברות משתי המדינות.',
        'המשרד, שמעניק ליווי ושירות מקיף, מעמיד לרשות הלקוחות עורכי דין ישראלים הדוברים את שתי השפות, מנהלים שיתופי פעולה מקצועיים עם משרדי עורכי דין הונגריים מובילים, מסייעים ללקוחות משני העולמות לקבל שירותי ייעוץ ובכלל זה אף ייעוץ לבחירת עורך הדין המתאים ביותר לייצג את עניינם וניהול ההתקשרות עמו, מוסמכים לתרגום וביצוע עסקאות בשתי המדינות. כך לקוחות המשרד זוכים לכתובת אחת מקצועית ואחראית לטיפול חוצה גבולות בין הונגריה לישראל.',
        '"השליטה בשפה ההונגרית, לצד היכרות מעמיקה עם הונגריה, המערכות והתרבות שבה, מאפשרות ללקוחות המשרד ליהנות מטיפול הוליסטי ומקיף. כדי לבצע פעולות משפטיות בהונגריה צריך לדאוג לשירותי תרגום ונוטריון, סיוע בבחירת גורמי מקצוע לטיפול בסוגיה ועוד. הידע הרב בדין ההונגרי וההיכרות המעמיקה עם המשק ההונגרי - חוסכים ללקוח זמן ומשאבים רבים."',
      ],
    },
    services: {
      title: 'המומחיות שלנו',
      items: [
        {
          id: 'inheritance_hu',
          title: 'ירושה בהונגריה',
          description: 'ירשתם נכסים בהונגריה?',
          content: [
            'משרדנו מטפל בהליכי הוצאת צו קיום צוואה או צו ירושה בהונגריה, במסירת העזבון לידי היורשים הישראלים ובהעברת כספי העזבון לישראל. במסגרת השירות, משרדנו משתף פעולה עם עורך דין הונגרי מקומי ותיק ומוערך, המתמחה בעצמו בהליכי ירושה.',
            'לעו"ד קריסטינה פוליצר מימון יתרון משמעותי בתחום זה לאור העובדה כי היא בעלת תואר דוקטור במשפטים מאוניברסיטה בהונגריה, מדברת הונגרית ברמת שפת אם ובקיאה בהליכים המשפטיים והאדמיניסטרטיביים במדינה.',
            'במסגרת הטיפול המקיף משרדנו מעניק טיפול במכירת מקרקעין והעברת כספי המכירה לישראל, מול המוסדות הפיננסיים בהונגריה, ובמידת הצורך דואג להעברת הכספים לישראל.',
            'כמו כן, במסגרת הטיפול המקיף משרדנו מטפל בתרגום ואישור המסמכים מהונגריה מול הבנקים בישראל על מנת להוכיח את מקור הכספים, כנדרש. {#translation|ראו אישור תרגום נוטריוני}',
          ],
        },
        {
          id: 'inheritance',
          title: 'חוות דעת דין זר (ירושה)',
          description: 'מדוע יש צורך בהכנת חוות דעת בדין ההונגרי?',
          content: [
            'על פי הדין במדינת ישראל, כאשר מוגשת בקשה לצו קיום צוואה או צו ירושה לרשם לענייני ירושה, לגבי אדם שהיה תושב חוץ בעת פטירתו, חובה לצרף לבקשה חוות דעת של מומחה לדין הזר, הדין החל במקום הפטירה. משרדנו עוסק רבות במתן חוות דעת בדין הזר (הדין הונגרי), וצבר ניסיון של למעלה מ – 10 שנים בהכנת חוות דעת, המוגשות יחד עם הבקשה לצו ירושה או צו קיום צוואה של תושבי חוץ או לבקשת המשרד המייצג את היורשים.',
            'הדרישה לחוות דעת מומחה בדין הזר היא לפי כללי המשפט הבין-לאומי הפרטי, ונועדה לוודא שתושב החוץ לא ייפגע בעקבות החלת הדין הישראלי, למשל – הסדר המשריין חלק מן העזבון לבן זוג או לילדים, כפי שקיים בחוק ההונגרי.',
            'בהתאם לסעיף 136 לחוק הירושה, תשכ"ה-1965 "בית המשפט בישראל מוסמך לדון בעניין ירושתו של כל אדם, אשר (א) מושבו ביום מותו היה בישראל, או (ב) אשר הניח נכסים בישראל. כאשר המושב של האדם לא היה בישראל, אלא במדינה אחרת, אך הוא הניח נכסים בישראל, כלומר, הוא היה תושב חוץ אשר הלך לעולמו והותיר אחריו נכסים בישראל, כדי שיורשיו של אותו תושב חוץ יוכלו לקבל לידיהם צו ירושה או צו קיום צוואה ולקבל את הרכוש שהושאר בישראל, חובה להגיש חוות דעת מומחה בדין הזר בצירוף הבקשה.',
            'מיהו מומחה בדין הזר? "עורך דין או משפטן העוסק – בין בפרקטיקה, בין באקדמיה ובין בדרך אחרת – בשיטת המשפט שאותה צריך להוכיח, הינו בעל כישורים לשמש כעד מומחה שניתן להוכיח באמצעותו דין זר." – כך נקבע בפסיקת בית המשפט העליון משנת 2000 (פסק דין ברג).',
          ],
        },
        {
          id: 'real-estate',
          title: 'חוות דעת מקרקעין (סעיף 10ב)',
          description: 'אישור מומחה לדין ההונגרי בהתאם לתקנות המקרקעין.',
          content: [
            'משרדנו מתמחה ומוסמך לתת אישור לצורך צירופו לבקשה לרישום עסקת מקרקעין כאשר אחד הצדדים לעסקה הוא תאגיד זר הרשום בהונגריה.',
            'סעיף 10(ב) לתקנות המקרקעין (ניהול ורישום) התשע"ב-2011 עוסק בדרישות להגשת בקשה לרישום עסקה במקרקעין, וקובע כי הבקשה צריכה להיות חתומה על ידי בעל המקרקעין, לכלול פרטים מזהים ולצרף אישור צד שלישי אם נדרש. התקנה קובעת כי אם אחד הצדדים לעסקה הוא תאגיד, יצורפו מסמכים המעידים על קיום התאגיד, כשירותו והחלטתו לבצעה.',
            'כאשר אחד הצדדים לעסקה תאגיד זר, יצורף לשטר עסקה גם אישור עורך דין הבקיא בדיני המדינה שהתאגיד רשום בה, כי התאגיד כשיר לבצע את הפעולה לפי אותם דינים.',
            'לאחר בדיקת המידע הרלוונטי במסמכי התאגיד וברשומות בהונגריה, משרדנו מספק מסמך לרשם המקרקעין לפיו הוראות הדין החלות בהונגריה מתירות רכישת/מכירת מקרקעין מחוץ לשטח המדינה והאם יש צורך באישור מיוחד.',
          ],
        },
        {
          id: 'citizenship',
          title: 'אזרחות ותיקון אי התאמות',
          description: 'קבלת אזרחות הונגרית / דרכון הונגרי.',
          content: [
            'משרדנו מתמחה בהכנת מסמכים לצורך קבלת אזרחות הונגרית / דרכון הונגרי ומעניק שירותים בתחומים להלן: שירותי תרגום, סיוע במילוי טפסים, תיקון אי התאמות בין תעודות.',
            'תיקון אי התאמות בין הרישומים בהונגריה לרישומים בישראל בתעודות ציבוריות: לא מעט פעמים מגלים במסגרת הליך הוצאת אזרחות כי קיימות אי-התאמות בתאריך הלידה, בשם הפרטי או בשם המשפחה בין הרישום בהונגריה לרישום במשרד הפנים הישראלי.',
            'תיקון אי ההתאמה כאשר הנולד בהונגריה בחיים: הדרך הפשוטה ביותר הינה לפנות למשרד הפנים הישראלי בבקשה להתאים את הרישום בישראל לרישום בהונגריה. לעיתים דרושים תרגום נוטריוני לעברית של תעודת הלידה ההונגרית, תרגום אשר משרדנו יכול לספק {#translation|ראו אישור תרגום נוטריוני מהונגרית}.',
            'תיקון אי ההתאמה כאשר הנולד בהונגריה נפטר: בהתאם לדין הישראלי לא ניתן לבקש את התיקונים ממשרד הפנים ויש להגיש תביעה הצהרתית לבית המשפט לענייני משפחה בישראל. משרדנו מטפל בהליך לשינוי הפרטים הרשומים ותיקון אי-ההתאמה.',
          ],
        },
        {
          id: 'notary',
          title: 'שירותים נוטריוניים',
          description: 'שירותים נוטריוניים מלאים על ידי עו"ד ונוטריון קריסטינה פוליצר מימון.',
          content: [
            'במשרדנו ניתנים על ידי עורכת דין ונוטריון קריסטינה פוליצר מימון שירותים נוטריונים מלאים ובכלל זה:',
            'אימות חתימה על מסמכים וייפוי כוח בהונגרית, אנגלית ועברית',
            'תרגומים ואישורים נוטריונים של תרגומים בשפות הונגרית, אנגלית ועברית',
            'תצהירים בפני נוטריון',
            'תעודת חיים (אישור שפלוני נמצא בחיים)',
            'אימות חתימתו של קטין',
            'אימות חתימתו של אדם בשם תאגיד או בשם אדם אחר',
            'אישור העתק',
            'אישור צוואות',
            'אימות הסכם ממון שנכרת לפני הנישואין',
            'אישור נוטריוני ליציאת קטינים מישראל לחו"ל',
            'אישור ביטול מסמך נוטריוני',
            'אישורי אפוסטיל',
            '{#translation|קישור לתרגומים ואישורים נוטריונים בשפות הונגרית, אנגלית ועברית:}',
          ],
        },
        {
          id: 'translation',
          title: 'תרגום נוטריוני',
          description: 'תרגום נוטריוני מהונגרית לעברית ומעברית להונגרית.',
          content: [
            'כאשר נדרשים לבצע תרגום נוטריוני של מסמכים מהונגרית לעברית או מעברית להונגרית, לאנגלית או לכל שפה אחרת, הרי שלא מדובר בעוד תרגום רגיל, אלא תהליך מורכב בו קודם כל המסמכים עוברים תרגום מקצועי ולאחר מכן מאושרים על ידי נוטריון מוסמך.',
            'לדוגמא נדרשים לאשר את התרגום של מסמכים הנוגעים לענייני אזרחות ישראלית או הגירה (תעודת יושר, תעודת לידה תעודת נישואין), לימודים בחו"ל (תעודות בגרות, אישור תארים), רכישה של נכסים (אישור לבנקים בדבר מקור הכספים שמועברים לחשבון לישראל מהונגריה) וכדומה.',
            '**מהו אישור תרגום נוטריוני מהונגרית?**',
            'נוטריון הוא עורך דין בעל רישיון ממשרד המשפטים ורק הוא מוסמך לאשר ולאמת מסמכים שונים, כולל נכונות תרגום.',
            'באמצעות אישור תרגום נוטריוני מהונגרית או בתרגום נוטריוני לעברית, המסמך המשפטי, האקדמי או כל מסמך אחר מתורגם ולאחר מכן מאושר על ידי הנוטריון כמסמך מטעם המדינה לאשר שהמסמכים כאמור מתורגמים בצורה מדויקת ונכונה.',
            'האישור הנוטריוני מקנה למסמך המתורגם תוקף משפטי לכל דבר, לאחריו ניתן להגיש את המסמך לגורמים רשמיים שונים בישראל ובחו"ל.',
            'יצוין, כי למרות שבהתאם לדין ניתן לקבל אישור תרגום נוטריוני על מסמך בשפה שהנוטריון לא בקיא בה ונעזר בתצהיר מתורגמן, בפועל הרשויות בישראל לא מקבלות אישור שכזה ודורשות כי הנוטריון יאשר את התרגום בשפה שידועה לו.',
            '**מהו תפקידו של הנוטריון בתרגום מסמכים מהונגרית?**',
            'במשרדנו אנו מבצעים את התרגום עצמו, או במידה והמסמך כבר מתורגם אנו מבצעים את בדיקת התרגום ואישור תקינותו ככל ונערך על ידי מתרגם מוסמך אחר כדי לוודא שהתרגום מדויק ונאמן למקור.',
            'לאחר תהליך התרגום או הבדיקה, הנוטריון יחתום ויעניק חותמת רשמית של תרגום המסמך, וכך למעשה הוא יעניק לו תוקף משפטי אשר יהיה מקובל על ידי גופים רשמיים כמו בתי משפט, משרדי ממשלה, מוסדות אקדמיים וכד\'.',
            '**המחיר**',
            'עלות תרגום נוטריוני בישראל היא 251 ש"ח עד מאה המילים הראשונות בתרגום, 197 ש"ח לכל מאה מילים נוספות או חלק מהן, עד אלף מילים, ו-99 ש"ח לכל מאה מילים או חלק מהן מעבר לאלף המילים הראשונות. למחיר זה יש להוסיף מע"מ. המחיר קבוע בתקנות הנוטריונים (שכר שירותים) ומתעדכן אחת לזמן מה.',
            '{#calculator|מחשבון שכר טרחה בגין אישור תרגום:}',
          ],
        },
      ],
    },
    contact: {
      title: 'צור קשר',
      subtitle: 'נשמח לעמוד לרשותכם בכל שאלה או צורך משפטי.',
      fields: { name: 'שם מלא', email: 'דוא"ל', phone: 'טלפון', message: 'הודעה', submit: 'שלח הודעה', success: 'ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.' },
      details: [
        { name: 'עו"ד קריסטינה פוליצר מימון', role: 'עורכת דין ונוטריונית', phone: '0522-784796', email: 'maymon21@hotmail.com' },
        { name: 'עו"ד הדר מימון', role: 'עורך דין', phone: '0522-301416', email: 'hadarmaymon@gmail.com' },
      ],
    },
    calculator: {
      title: 'מחשבון שכר טרחה בגין אישור תרגום',
      subtitle: 'חישוב עלות אישור תרגום נוטריוני על פי התעריפים הקבועים בחוק.',
      wordCount: 'מספר מילים במסמך:',
      totalExclVat: 'סה"כ (לפני מע"מ):',
      totalInclVat: 'סה"כ (כולל מע"מ):',
      vatLabel: 'מע"מ (18%):',
      description: 'הערה: התעריפים נקבעים על פי תקנות הנוטריונים ומתעדכנים מעת לעת. המחיר המוצג הינו להמחשה בלבד ומתייחס לאישור הנוטריוני עצמו. עלות התרגום המקצועי עשויה להשתנות בהתאם לסוג המסמך.',
    },
    footer: { rights: '© כל הזכויות שמורות למשרד עו"ד קריסטינה פוליצר מימון' },
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', contact: 'Contact' },
    hero: {
      title: 'Krisztina Politzer Maymon – Attorney & Notary',
      subtitle: '**Expert in Hungarian Law** | 🇮🇱 Israel ↔ Hungary 🇭🇺',
      cta: 'Contact Us',
    },
    about: {
      title: 'About the Office',
      content: [
        'Attorney and Notary Krisztina Politzer Maymon was born in Hungary, completed her law studies (LL.B. and LL.M.) in Hungary and the USA, and is one of the few lawyers in israel who is fluent in the Hungarian language.',
        'After completing her master\'s degree in Hungary and the United States, Attorney Politzer Maymon moved to Israel, passed her internship and Bar exams. Upon certification, she worked in leading civil and commercial law firms, with a focus on labor law, and later qualified as a public notary. Today, alongside providing legal advice and opinions on Hungarian law to courts, Attorney Politzer Maymon serves as a court-appointed expert and advises law firms, including in complex and class-action lawsuits. She is also certified to provide signature verification and Apostille for the legal documents she translates.',
        'Attorney Politzer Maymon is a certified mediator by the Bar Association and serves as a public representative at the Tel Aviv-Yafo Labor Court.',
      ],
    },
    services: {
      title: 'Our Expertise',
      items: [
        {
          id: 'inheritance_hu',
          title: 'Hungarian Inheritance',
          description: 'Inherited assets in Hungary?',
          content: [
            'Our office handles probate or inheritance proceedings in Hungary, delivering the estate to Israeli heirs and transferring estate funds to Israel. As part of the service, our office collaborates with a long-standing and respected local Hungarian lawyer who specializes in inheritance proceedings.',
            'Attorney Krisztina Politzer Maymon has a si
            
            
            nificant advantage in this field given that she holds a doctorate in law from a Hungarian university, speaks Hungarian at a native level, and is proficient in the legal and administrative procedures in the country.',
            'As part of the comprehensive care, our office provides for the sale of real estate and transfer of sale funds to Israel, following up with financial institutions in Hungary, and ensuring the transfer of funds to Israel as needed.',
          ],
        },
        {
          id: 'inheritance',
          title: 'Foreign Law Opinion (Inheritance)',
          description: 'Why is it necessary to prepare a Hungarian law opinion?',
          content: [
            'According to Israeli law, when a request for probate or inheritance is submitted for a person who was a foreign resident at the time of death, a foreign law expert opinion must be attached. Our office has over 20 years of experience in preparing these opinions for Israeli courts.',
            'The requirement for a foreign law expert opinion is based on private international law rules and is intended to ensure that the foreign resident is not harmed by the application of Israeli law, for example—arrangements that reserve part of the estate for a spouse or children, as exists in Hungarian law.',
            'In accordance with Section 136 of the Inheritance Law, 1965: "The court in Israel is authorized to discuss the inheritance of any person whose domicile on the day of death was in Israel, or who left assets in Israel."',
          ],
        },
        {
          id: 'real-estate',
          title: 'Real Estate Opinion (Section 10b)',
          description: 'Hungarian law expert certification for property registration.',
          content: [
            'Our office specializes and is authorized to provide certification for registering real estate transactions when one of the parties to the transaction is a foreign corporation registered in Hungary.',
            'Section 10(b) of the Real Estate Regulations (Management and Registration) 2011 deals with the requirements for registering a real estate transaction and states that a certificate from a lawyer proficient in the laws of the country where the corporation is registered must be attached.',
          ],
        },
        {
          id: 'citizenship',
          title: 'Citizenship & Record Corrections',
          description: 'Obtaining Hungarian citizenship / Hungarian passport.',
          content: [
            'Our office specializes in preparing documents for obtaining Hungarian citizenship and provides services in: translation, assistance with forms, and correcting discrepancies between certificates.',
            'Correcting discrepancies in public certificates: Common issues include birth dates or names that differ between Hungarian records and Israeli Ministry of Interior records.',
          ],
        },
        {
          id: 'notary',
          title: 'Notary Services',
          description: 'Full notary services by Krisztina  Maymon.',
          content: [
            'Our office provides full notary services including: signature verification (Hungarian, English, Hebrew), notary translations, affidavits, life certificates, and apostille.',
          ],
        },
        {
          id: 'translation',
          title: 'Notary Translation',
          description: 'Certified translation from/to Hungarian.',
          content: [
            'Notary translation is a complex process where documents undergo professional translation followed by certification by a qualified notary.',
            'Necessary for citizenship matters, foreign studies, or property acquisitions requiring proof of funds source to Israeli banks.',
            'Legal validity: Notary certification gives the translated document full legal validity for submission to official bodies in Israel and abroad.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We will be happy to assist you with any legal question.',
      fields: { name: 'Full Name', email: 'Email', phone: 'Phone', message: 'Message', submit: 'Send', success: 'Message sent successfully! We will get back to you shortly.' },
      details: [
        { name: 'Krisztina Politzer Maymon, Adv.', role: 'Attorney & Notary', phone: '0522-784796', email: 'maymon21@hotmail.com' },
        { name: 'Hadar Maymon, Adv.', role: 'Attorney', phone: '0522-301416', email: 'hadarmaymon@gmail.com' },
      ],
    },
    calculator: {
      title: 'Translation Fee Calculator',
      subtitle: 'Calculate the cost of notary translation certification according to legal rates.',
      wordCount: 'Number of words in document:',
      totalExclVat: 'Total (Excl. VAT):',
      totalInclVat: 'Total (Incl. VAT):',
      vatLabel: 'VAT (18%):',
      description: 'Note: Rates are set by Notary Regulations and updated periodically. The displayed price is for illustration purposes and refers to the notary certification itself. The cost of professional translation may vary depending on the document type.',
    },
    footer: { rights: '© All rights reserved to Krisztina Politzer Maymon Law Firm' },
  },
  hu: {
    nav: { home: 'Kezdőlap', about: 'Irodáról', services: 'Szolgáltatások', contact: 'Kapcsolat' },
    hero: {
      title: 'Politzer Maymon Krisztina – IZRAELI ÜGYVÉD ÉS KÖZJEGYZŐ',
      subtitle: '**Izraeli szakjogász** | 🇮🇱 Izrael ↔ Magyarország 🇭🇺',
      cta: 'Kapcsolatfelvétel',
    },
    about: {
      title: 'Az Irodáról',
      content: [
        'Politzer Maymon Krisztina izraeli ügyvéd és közjegyző Magyarországon született, jogi tanulmányait (LL.B. és LL.M.) Magyarországon és az USA-ban folytatta. Azon kevés izraeli szakemberek egyike, aki magyarnyelven  is ad jogi szolgáltatást Izraelben.',
        'Ügyvédi irodánk izraeli jogi és közjegyzői szolgáltatásokat nyújt, ezen belül meghatalmazások elkészítését, illetve hitelesítését, közjegyzői aláírás hitelesítését szerződésekhez, végrendeletekhez, kiskorúak külföldi utazási engedélyeihez, valamint Magyarországon készült dokumentumok hiteles fordítását magyarról/angolról héber nyelvre.',
        'Irodánk megfelelő magyar nyelvismerettel és jogi szakképesítéssel rendelkezik, mivel Dr. Politzer Maymon Krisztina 1998 óta ügyvédként,  2018 óta bejegyzett izraeli közjegyzőként működik Izraelben, jogi diplomáját az ELTE Állam- és Jogtudományi karán szerezte.',
      ],
    },
    services: {
      title: 'Szolgáltatásaink',
      items: [
        {
          id: 'legal-opinion',
          title: 'Hagyatéki ügyek intézése Izraelben',
          description: 'Kiderült, hogy Izraelben van öröksége? Így juthat hozzá!',
          content: [
            'Fontos tudni, hogy ha Izraelben található házat, járművet, pénzösszeget, céget vagy más vagyonelemet örökölt – a magyarországi gyakorlattal ellentétben – itt nem indul hivatalból eljárás az örökhagyó halálával, hanem az örökösnek kell kezdeményezni azt.',
            'Izrael és Magyarország között jelenleg nincsen nemzetközi egyezmény az örökösödési jog, illetve a hagyatékátadás területén. Abban az esetben tehát, ha izraeli vagyonelemek találhatóak a Magyarországon elhunyt örökhagyó után, az örökös kénytelen lesz ezekkel a vagyontárgyakkal kapcsolatban Izraelben is hagyatéki eljárást lefolytatni.',
            'Az ilyen, nemzetközi elemet tartalmazó hagyatéki ügyekben általában annak az államnak a jogát is figyelembe kell venni, amelynek területén az örökhagyó szokásos tartózkodási helye elhalálozásának időpontjában volt.  Ennek érdekében az eljárás során a magyar joggal kapcsolatban szakvéleményt kell csatolni, amelyet kizárólag olyan izraeli bejegyzett ügyvéd készíthet, aki a magyar jogban is járatos.',
            'Irodánk vállalja az izraeli hagyatéki eljárás megindítását, lebonyolítását, a szükséges szakvélemény elkészítését, majd a hagyatékátadó végzés megszerzése után a hagyatéki vagyon átírását, az esetleges pénzösszegek átutalását. ',
          ],
        },
      
        {
          id: 'translation',
          title: 'Közjegyzői iratok, hivatalos fordítások',
          description: '',
          content: [
            'Ügyvédi irodánk közjegyzői szolgáltatásokat nyújt Izraelben, ezen belül meghatalmazások elkészítését, illetve hitelesítését, közjegyzői aláírás hitelesítését szerződésekhez, végrendeletekhez, kiskorúak külföldi utazási engedélyeihez, valamint Magyarországon készült dokumentumok hiteles fordítását magyarról/angolról héber nyelvre.',
            'Bevándorlás, partner-vízum, állampolgársági ügyek keretében az izraeli hatóságokhoz (például a Belügyminisztériumhoz, bíróságokhoz) beadott anyakönyvek, engedélyek, bizonyítványok magyarról héberre fordítása irodánk egyik fő szakterülete. Ezzel kapcsolatban fontos tudni, hogy Izraelben a hiteles fordítás igazolását kizárólag a fordítandó dokumentum nyelvét beszélő, közjegyzői engedéllyel rendelkező ügyvéd készítheti el. Sem magánszemélyek, sem fordítóirodák, sem az OFFI által készített fordítás nem számít hiteles fordításnak, illetve nem fogadják el a magyar nyelvet beszélő fordító nyilatkozatát még abban az esetben sem, ha azt izraeli közjegyző előtt teszi.',
            'Figyelem: a magyar hatóságok által kiállított iratok (születési anyakönyvi kivonat, házassági anyakönyvi kivonat, erkölcsi bizonyítvány, családi állapot igazolása stb.) izraeli bemutatásához apostille pecsét szükséges, amelyet Magyarország Külgazdasági és Külügyminisztériuma készít el. A hiteles fordítást az így kiállított eredeti és apostille pecséttel ellátott dokumentumhoz csatoljuk. Az iratokat személyesen, de akár postai úton is el lehet juttatni irodánkba, az elkészült hitelesített fordítást pedig előzetes egyeztetés alapján az ügyfél által kívánt módon juttatjuk vissza.',
            'Az egyes iratok fordításának ára megegyezés tárgya, azonban a közjegyzői fordítás-hitelesítés (és minden közjegyzői szolgáltatás) árát Izraelben törvény határozza meg, amely a már lefordított dokumentumban szereplő szavak számától függ.  Az ajánlatkalkulátort itt találja:',
          ],
        },
      ],
    },
    contact: {
      title: 'Kapcsolat',
      subtitle: 'Készséggel állunk rendelkezésére bármilyen jogi kérdésben.',
      fields: { name: 'Név', email: 'E-mail', phone: 'Telefon', message: 'Üzenet', submit: 'Küldés', success: 'Üzenet sikeresen elküldve! Hamarosan visszajelzünk.' },
      details: [
        { name: 'Dr. Politzer Maymon Krisztina', role: 'Ügyvéd és Közjegyző', phone: '0522-784796', email: 'maymon21@hotmail.com' },
        { name: 'Dr. Hadar Maymon', role: 'Ügyvéd', phone: '0522-301416', email: 'hadarmaymon@gmail.com' },
      ],
    },
    calculator: {
      title: 'Fordítási díj kalkulátor',
      subtitle: 'Közjegyzői fordításhitelesítés költségének kiszámítása a törvényi díjszabás szerint.',
      wordCount: 'Szavak száma a dokumentumban:',
      totalExclVat: 'Összesen (ÁFA nélkül):',
      totalInclVat: 'Összesen (ÁFÁ-val):',
      vatLabel: 'ÁFA (18%):',
      description: 'Megjegyzés: A díjakat közjegyzői rendeletek határozzák meg és időszakonként frissülnek. A kijelzett ár tájékoztató jellegű, és a közjegyzői hitelesítésre vonatkozik. A szakfordítás költsége a dokumentum típusától függően változhat.',
    },
    footer: { rights: '© Minden jog fenntartva – Politzer Maymon Krisztina Ügyvéדי Irodája' },
  },
};
