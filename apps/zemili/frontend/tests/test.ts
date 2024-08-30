import { expect, test } from "npm:playwright/test";

test("home page has expected h1", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator("h1")).toBeVisible();
});
