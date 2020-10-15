import { getSummarizeErrors, deleteEmptyProps } from './helper';

describe('Helpers', () => {
  describe('getSummarizeErrors function', () => {
    it('should format string with errors to object', () => {
      const message = '"title" is required,"poster_path" must be a valid uri';
      const formattedErrors = {
        poster_path: 'must be a valid uri',
        title: 'is required'
      };

      expect(getSummarizeErrors(message, {poster_path: '', title: ''})).toEqual(formattedErrors);
    })
  });

  describe('deleteEmptyProps function', () => {
    it('should delete from object properties with empty values', () => {
      const values = {
        poster_path: '',
        title: 'Test',
        revenue: 0
      };
      const expected = {...values};
      delete expected.poster_path;

      expect(deleteEmptyProps(values)).toEqual(expected);
    });
  });
});