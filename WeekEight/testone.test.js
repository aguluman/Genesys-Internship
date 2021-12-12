const testone = require('./testone');


const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});
    //.not.toBe
    test('Adds 2 + 2 to equal 4', () => {
        expect(testone.add(2, 2)).toBe(4);
    });
    //.not.toBe
    test('Adds 2 + 2 to NOT equal 5', () => {
        expect(testone.add(2, 2)).not.toBe(5);
    });

    //CHECK fot TRUTHY and FALSY values
    //tOBeUndefined matches only undefined
    //toBeDefined is the opposite of toBeUndefined
    //tobeTruthy matches anything that an if statement treats as true
    //tobeFalsy matches anything that an if statement treas as false.

        //toBeNull
    test('Should be null', () => {
        expect(testone.isNull()).toBeNull();
    });

        //toBeFalsy
    test('Should be falsy', () => {
        expect(testone.checkValue(undefined)).toBeFalsy();
    });

        //toEqual
    test('User should be Chukwuma A.', () => {
        expect(testone.createUser()).toStrictEqual({firstName: 'Chukwuma', lastName: 'A.'});
    });

    //less than and greater than
    test('should be under 1600', () => {
        const load1 = 800;
        const load2 = 800;
        expect(load1 + load2).toBeLessThanOrEqual(1600);
    });

    //Regex
    test('There is no I in team', () => {
        expect('teami').not.toMatch(/I/);
    });

    //Arrays
    test('Admin should be usernames', () => {
        usernames = ['ebuka','precious', 'christwin'];
        expect(usernames).toContain('christwin');
    });

    //working with async data

    // test('User fetched name should be Leanne Graham', () => {
    //       expect.assertions(1);
    //       return functions.fetchUser().then(data => {
    //         expect(data.name).toEqual('Leanne Graham');
    //       });
    //     });

    //async await
    test('user fetched name should be Leanne Graham', async () => {
        expect.assertions(2);
         const data = await testone.fetchUser();
            expect(data.name).toStirctEqual('Leanne Graham');
    });