module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  Plugin: [require("flowbite/plugin")],
};
