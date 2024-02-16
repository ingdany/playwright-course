import { test, expect } from '@playwright/test';

test('Access Stackoverflow', async ({ page }) => {
    await page.goto('https://10.0.2.51:8443/auth/realms/myRealm/protocol/openid-connect/auth?client_id=kaligent-one&redirect_uri=https%3A%2F%2F10.0.2.51%2Fpatients&state=74fdf89a-273f-441b-9dff-aec20e30525b&response_mode=fragment&response_type=code&scope=openid&nonce=cb5a2ef0-8c83-46af-8f72-22cf9aaff5bc&code_challenge=oPvWmsGCoEYCs-Q47DZt6Vf6nm9OMlpdwdOSj2f1pMI&code_challenge_method=S256');
    // await page.click('.my-profile');
    await page.pause();
});