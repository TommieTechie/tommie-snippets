const ukraineFlag = null ?? "🇺🇦";
console.log(ukraineFlag);
// This will output: "🇺🇦", because null is a nullish value.

const zero = undefined ?? 0;
console.log(zero);
// This will output: 0. undefined is a nullish value too.

const browser = "Firefox🦊" ?? "Brave🦁" ?? "Chrome";
console.log(browser);
// This will output "Firefox🦊", because there's no nullish values.
