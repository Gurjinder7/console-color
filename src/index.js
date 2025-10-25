function log(...args) {
  // console.log(args);

  // const color =
  // console.log(color);

  if (args?.length == 0) {
    throw new Error("Empty arguments in function call!");
  }

  const logColor = returnColor(args[0] ?? "Y");
  for (const arg of args) {
    const type = Object.prototype.toString.call(arg).split(" ")[1];
    // console.log(logColor)
    // console.log(returnColor(arg), logColor)
    if (returnColor(arg) === logColor) {
      continue;
    }

    // console.log(type);
    if (type === "Object]") {
      console.log(`%c ${JSON.stringify(arg)}`, ` color: ${logColor} `);
    } else if (type === "Array]") {
      for (const val of arg) {
        const dataType = Object.prototype.toString.call(val).split(" ")[1];
        // console.log(dataType);
        if (dataType === "Object]") {
          console.log(`%c ${JSON.stringify(arg)}`, ` color: ${logColor} `);
        } else {
          console.log(`%c ${val}`, ` color: ${logColor} `);
        }
      }
    } else {
      console.log(`%c ${arg}`, ` color: ${logColor} `);
    }
  }

  //   console.log("%c Log", "color: red");
  //   console.log(args);
}

function headlog(title, ...args) {
  if (!!title) {
    const color = returnColor(args[0] ?? "Y");
    console.log(
      `%c${title}`,
      ` color: ${color}; font-weight: bold; text-decoration: underline; `
    );
    for (const arg of args) {
        if (returnColor(arg) === color) {
            continue;
        }
      console.log(arg);
    }
  } else {
    throw new Error(
      "Title is required as first argument, followed by all arguments to log!"
    );
  }
}


const a = 10;
const b = 20;
const c = {
  name: "gssds",
  age: 20,
  address: {
    street: "asdasd",
  },
  sex: "Male",
};

const d = [
  {
    name: "asdasd",
  },
  {
    name: "asdasd",
  },
];
const e = [1, 2, 4];

log("O", a, b, d, c, e);
// log("Object");

headlog("title", a, b, c, d);
headlog("asdasd", "V", a);

function returnColor(color) {
  switch (color) {
    case "Y":
      return "yellow";
    case "R":
      return "Red";
    case "G":
      return "yellowgreen";
    case "B":
      return "skyblue";
    case "C":
      return "cyan";
    case "V":
      return "violet";
    case "O":
      return "orange";
    case "P":
      return "pink";
    default:
      return "yellow";
  }
}
