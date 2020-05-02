import prom from "prom-client";

export const makeCounter = (event: string, labelNames: string[]) => {
  const eventName = event.replace(/\s/g, "_");

  return new prom.Counter({
    name: eventName,
    help: `${eventName} counter`,
    labelNames,
  });
};
