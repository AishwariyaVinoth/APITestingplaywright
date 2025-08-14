/*
1. Negative Testing & Error Handling
Invalid User ID: Send a GET request to /users/9999 and verify that:
Status code is 404
Response body is empty or as expected.
Missing Required Fields: POST to /users without name or job and verify if:
Status code is correct (likely 400 or 201 with default handling).
The system behavior is documented in your test.
*/
const { test, expect } = require('@playwright/test');
const testData = require('./testData');

test('Get User with Invalid ID', async ({request}) => {
    const response = await request.get(`${testData.baseUrl}/9999`, {
        headers: {
            'Accept': 'application/json',
            'x-api-key': testData.apiKey
        }
    });
    expect(response.status()).toBe(404);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toEqual({});
});

