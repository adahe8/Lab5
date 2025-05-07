// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//isPhoneNumber tests
test("checking if letter strings are correctly ruled false",() => {
  expect(isPhoneNumber("5christmas")).toBe(false);
});
test("checking if strings with too many digits ruled false",() => {
  expect(isPhoneNumber("6593811000368")).toBe(false);
});
test("checking one possible phone number template",() => {
  expect(isPhoneNumber("100-185-2630")).toBe(true);
});
test("checking if strings with too many digits ruled false", () => {
  expect(isPhoneNumber("(100) 285-1403")).toBe(true);
});

//isEmail tests
test("invalid email with missing postscript",() => {
  expect(isEmail("ada.he@gmail")).toBe(false);
});
test("invalid email starting with specail chars",() => {
  expect(isEmail("()@yahoo.com")).toBe(false);
});
test("valid possible email template",() => {
  expect(isEmail("adhe@ucsd.edu")).toBe(true);
});
test("valid email starting with numbers and special chars", () => {
  expect(isEmail("100person@gmail.com")).toBe(true);
});

//isStrongPassword tests
test("too short password",() => {
  expect(isStrongPassword("hee")).toBe(false);
});
test("password with invalid chars",() => {
  expect(isStrongPassword("ax12T_su$!")).toBe(false);
});
test("password not startin with letter",() => {
  expect(isStrongPassword("1cars")).toBe(false);
});
test("valid strong password",() => {
  expect(isStrongPassword("strongP123word")).toBe(true);
});
test("shorter strong password", () => {
  expect(isStrongPassword("adahe8")).toBe(true);
});

//isDate tests
test("invalid date - uses letters",() => {
  expect(isDate("DY/XX/ZTRS")).toBe(false);
});
test("doesn't follow format",() => {
  expect(isDate("December 18, 1972")).toBe(false);
});
test("America version with 1 digit month",() => {
  expect(isDate("9/18/2004")).toBe(true);
});
test("Global version with day first", () => {
  expect(isDate("22/07/2025")).toBe(true);
});

//isHexColor tests
test("uses rgb not hex",() => {
  expect(isHexColor("(255, 215, 0)")).toBe(false);
});
test("doesn't have #",() => {
  expect(isHexColor("rgb3")).toBe(false);
});
test("3 digit hex code",() => {
  expect(isHexColor("#123")).toBe(true);
});
test("6 digit hex code", () => {
  expect(isHexColor("#FFD700")).toBe(true);
});