const { test, expect } = require('@playwright/test');
const testData = require('./testData');
var userid;

test('Get Users', async ({request}) => {
    const response = await request.get(`${testData.baseUrl}?page=2`, {
        headers: {
            'Accept': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    });
    console.log(await response.json())
    expect(response.status()).toBe(200);
});
test('Create User', async ({request}) => {
const response = await request.post(testData.baseUrl, {
        data: testData.user,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    });
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(201);
    userid = responseBody.id;
    console.log("User ID: " + userid);
});
test('update User', async ({request}) => {
    const response = await request.put(`${testData.baseUrl}/${userid}`, {
        data: testData.updatedUser,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    });
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
});

test('Delete User', async ({request}) => {
    const response = await request.delete(`${testData.baseUrl}/${userid}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    });
    expect(response.status()).toBe(204);
});