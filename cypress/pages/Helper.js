export class Helper {
    /**
     * Generates a random 12-digit number.
     * @returns {string} A random 12-digit number as a string.
     */
    generateRandom12DigitNumber() {
        let number = Math.floor(Math.random() * 9 + 1).toString(); // first digit: 1–9
        for (let i = 0; i < 11; i++) {
            number += Math.floor(Math.random() * 10); // digits: 0–9
        }
        return number;
    }

    /**
     * Generates a random Yopmail email address.
     * @returns {string} A random Yopmail email address.
     */
    generateRandomYopmailEmail() {
        const randomString = Math.random().toString(36).substring(2, 10);
        return `${randomString}@yopmail.com`;
    }

}

export const helper = new Helper();