import formatAddress from '../../formatAddress';

describe('formatAddress', () => {
    it('returns the formatted address', () => {
        const addressObject = {
            street1: '123 Main Street',
            street2: 'Apartment 456',
            city: 'Atlanta',
            state: 'GA',
            zip: '30307',
        }

        const result = formatAddress(addressObject);
        // console.log(result);
        const expected = '123 Main Street\nApartment 456\nAtlanta, GA 30307';

        expect(result).toBe(expected);
    });

    it('no street specified', () => {
        const addressObject = {
            city: 'Atlanta',
            state: 'GA',
            zip: '30307',
        };

        const result = formatAddress(addressObject);
        // console.log(result);
        const expected = '\nAtlanta, GA 30307';
        expect(result).toEqual(expected);
    })
})

