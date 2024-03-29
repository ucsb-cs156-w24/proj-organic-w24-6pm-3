import { daysSinceTimestamp, formatTime, padWithZero, timestampToDate } from "main/utils/dateUtils";


describe("dateUtils tests", () => {

  describe("padWithZero tests", () => {

    test("pads when less than 10", () => {
      expect(padWithZero(0)).toBe("00");
      expect(padWithZero(1)).toBe("01");
      expect(padWithZero(9)).toBe("09");

    });

    test("does not pad with 10 or greater", () => {
      expect(padWithZero(10)).toBe(10);
      expect(padWithZero(11)).toBe(11);
    });

  });

  describe("timestampToDate tests", () => {
    it("converts properly", () => {
      expect(timestampToDate(1653346250816)).toBe("2022-05-23");
    });
  });

  describe("daysSinceTimestamp tests", () => {
    it("calculates days properly", () => {
      jest.useFakeTimers().setSystemTime(new Date('2022-06-01'));
      expect(daysSinceTimestamp(1653346250816)).toBe(9);
    });
  });

  describe("formatTime tests", () => {
    it('should return empty string for null input', () => {
      expect(formatTime(null)).toEqual('');
    });

    it('should return `Online now` for less than 2 minutes', () => {
      const oneMinuteAgo = new Date(Date.now() - 60 * 1000).toISOString();
      expect(formatTime(oneMinuteAgo)).toEqual('Online now');
    });
  
    it('should return minutes ago format', () => {
      const thirtyMinutesAgo = new Date(Date.now() - 2 * 60 * 1000).toISOString();
      expect(formatTime(thirtyMinutesAgo)).toEqual('2 minutes ago');
    });
  
    it('should return hours ago format', () => {
      const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString();
      expect(formatTime(threeHoursAgo)).toEqual('3 hours ago');
    });
  
    it('should return 1 hour ago for 1 hour', () => {
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
      expect(formatTime(oneHourAgo)).toEqual('1 hour ago');
    });
  
    it('should return days ago format', () => {
      const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString();
      expect(formatTime(twoDaysAgo)).toEqual('2 days ago');
    });
  
    it('should return 1 day ago for 1 day', () => {
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      expect(formatTime(oneDayAgo)).toEqual('1 day ago');
    });
  
    it('should return date string for over a week', () => {
      const twoWeeksAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      expect(formatTime(twoWeeksAgo.toISOString())).toEqual(twoWeeksAgo.toLocaleDateString());
    });

  
    it('should correctly handle float timestamp', () => {
      jest.useFakeTimers().setSystemTime(new Date('2024-02-29T08:05:01.651Z'));
      const floatTimestamp = (new Date('2024-02-29T08:00:01.651Z').getTime()) / 1000;
      expect(formatTime(floatTimestamp)).toEqual('5 minutes ago');
    });
  
    it('should correctly handle ISO 8601 date strings', () => {
      jest.useFakeTimers().setSystemTime(new Date('2024-02-29T10:05:01.651Z'));
      const isoDate = '2024-02-29T08:05:01.651Z';
      expect(formatTime(isoDate)).toEqual('2 hours ago');
    });
  
    it('should return "Invalid date" for incorrect input', () => {
      const invalidInput = 'not a date';
      expect(formatTime(invalidInput)).toEqual('Invalid date');
    });
  })
  
  describe("formatTime float timestamp detection tests", () => {
    it('should correctly differentiate between float and non-float numeric strings', () => {
      jest.useFakeTimers().setSystemTime(new Date('2024-02-29T10:05:01.651Z'));
      
      // Float timestamp (as a string) that represents a specific time
      const floatTimestampString = "1614681600.5"; // Equivalent to some specific date and time
      expect(formatTime(floatTimestampString)).not.toEqual('Invalid date');
  
      // Numeric string without decimal, which should not be treated as a valid timestamp in seconds
      const numericStringWithoutDecimal = "16146816005"; // A large number, potentially a timestamp in milliseconds or an error
      expect(formatTime(numericStringWithoutDecimal)).toEqual('Invalid date');
  
      // Test with an input that does not include a period (decimal point) to ensure the logic for detecting float timestamps is exercised
      const stringWithoutPeriod = "This is not a timestamp";
      expect(formatTime(stringWithoutPeriod)).toEqual('Invalid date');
    });
  });
  
});
