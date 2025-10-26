/**
 * @param {...*} args - Required*
 * @example log("B", varA, varB...) OR log(varA...)
 * @default yellow
 * @description The log function can receive as many as arguments to console as you want. The first arugment have to be one of the color string symbol (Y, G, R, O, B, C, V, P) as asked for. If you skip the color as the first argument, Yellow is
 * used as a default color for logging.

*/

function log(...args) {
  if (args?.length == 0) {
    throw new Error("Empty arguments in function call!");
  }

  const logColor = returnColor(args[0] ?? "Y");
  for (const arg of args) {
    const type = Object.prototype.toString.call(arg).split(" ")[1];
    if (matchesAnyColorSymbol(arg)) {
      continue;
    }
    if (type === "Object]") {
      console.log(`%c ${JSON.stringify(arg)}`, ` color: ${logColor} `);
    } else if (type === "Array]") {
      for (const val of arg) {
        const dataType = Object.prototype.toString.call(val).split(" ")[1];
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

/**
 *
 * @param {*} title  - Required* for the title
 * @param  {...any} args -  first argument should be a color symbol string ("Y", "R", "G", "O", "B", "P", "C", "V") followed by everything you want to log. Default will be Yellow color.
 * @example headlog("My heading", "B", varA, varB...) OR headlog("My heading", varA, varB) - yellow default
 * @default yellow
 * @description headlog functions is to be used when you want a title on the first line of console followed by all things you want to log. The styling only applies
 * to the title in this case and other arguments will be logged as standard console log style.
 */
function headlog(title, ...args) {
  if (!!title && typeof title === "string") {
    const color = returnColor(args[0] ?? "Y");
    console.log(
      `%c${title}`,
      ` color: ${color}; font-weight: bold; text-transform: uppercase; `
    );

    for (const arg of args) {
      if (matchesAnyColorSymbol(arg)) {
        continue;
      } else {
        console.log(arg);
      }
    }
  } else {
    throw new Error("Title is required as first argument!");
  }
}

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

function matchesAnyColorSymbol(color) {
  if (
    color === "Y" ||
    color === "R" ||
    color === "G" ||
    color === "B" ||
    color === "C" ||
    color === "V" ||
    color === "O" ||
    color === "P"
  ) {
    return true;
  }
  return false;
}
