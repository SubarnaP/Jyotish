/**
 * Interface representing Panchanga (Hindu Astrological Calendar) data
 * Contains five main elements: tithi, nakshatra, yoga, karana, and muhurta
 */
export interface PanchangaData {
  /** Location name in Devanagari script */
  location: string;
  /** Date in Nepali calendar format */
  date: string;
  /** Sunrise time in local format */
  sunrise: string;
  /** Sunset time in local format */
  sunset: string;
  /** Current lunar day and its end time */
  tithi: string;
  /** Current lunar mansion and its end time */
  nakshatra: string;
  /** Astrological combination of sun and moon */
  yoga: string;
  /** First half of the lunar day */
  karana: string;
  /** Second half of the lunar day */
  secondKarana: string;
  /** Lunar phase (Krishna/Shukla) */
  paksha: string;
  /** Day of the week in Devanagari */
  weekday: string;
  /** Lunar month according to amanta system */
  amantaMonth: string;
  /** Lunar month according to purnimanta system */
  purnimantMonth: string;
  /** Current zodiac sign of moon */
  moonRashi: string;
  /** Current zodiac sign of sun */
  sunRashi: string;
  /** Day of the lunar month */
  dayNumber: string;
  /** Year in Shaka calendar */
  shakaSamvat: string;
  /** Year in Vikram calendar */
  vikramSamvat: string;
}

export type PanchangaResponse = {
  success: boolean;
  data: PanchangaData;
  error?: string;
};
