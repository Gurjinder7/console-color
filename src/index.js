function log(...args) {

  if (args?.length == 0) {
    throw new Error("Empty arguments in function call!");
  }

  const logColor = returnColor(args[0] ?? "Y");
  for (const arg of args) {
    const type = Object.prototype.toString.call(arg).split(" ")[1];
    // console.log(logColor)
    // console.log(returnColor(arg), logColor)
    if (matchesAnyColorSymbol(arg)) {
      continue;
    }

    // console.log(type);
    if (type === "Object]") {
      console.log(`%c ${JSON.stringify(arg)}`, ` color: ${logColor} `);
    } else if (type === "Array]") {
      for (const val of arg) {
        // console.log(val)
        const dataType = Object.prototype.toString.call(val).split(" ")[1];
        // console.log(dataType);
        if (dataType === "Object]") {
          console.log(`%c ${JSON.stringify(val)}`, ` color: ${logColor} `);
        } else {
          console.log(`%c ${val}`, ` color: ${logColor} `);
        }
      }
    } else {
      console.log(`%c ${arg}`, ` color: ${logColor} `);
    }
  }

}

function headlog(title, ...args) {
  // console.log(args)
  // console.log(title, args)
  if (!!title && typeof(title)==='string') {
    const color = returnColor(args[0] ?? "Y");
    console.log(
      `%c${title}`,
      ` color: ${color}; font-weight: bold; text-transform: uppercase; `
    );

    for (const arg of args) {
      if (matchesAnyColorSymbol(arg)) {
        continue
      } else {
        console.log(arg)
      }
      
    }
  } else {
    throw new Error(
      "Title is required as first argument!"
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
    name: "gurjinder",
  },
];
const e = [1, 2, 4];
const name = "Name"

log("O", a, b, d, c, e,);
log(a, b, d, c, e);

// log("Object");

// headlog(a, b, c, d);
headlog(name, "P", d,c)

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

function matchesAnyColorSymbol (color) {
  if( color === "Y" || color === "R" || color === "G" || color === "B" || color === "C"
    || color === "V" || color === "O" || color === "P"
  ) {
    return true
  }
  return false
}
