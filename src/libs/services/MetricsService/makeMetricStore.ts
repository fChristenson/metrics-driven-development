import prom from "prom-client";

export const makeCounter = (event: string, labelNames: string[]) => {
  const eventName = event.replace(/\s/g, "_");

  return new prom.Counter({
    name: eventName,
    help: `${eventName} counter`,
    labelNames,
  });
};

export const makeHistogram = (
  event: string,
  labelNames: string[],
  buckets: any[]
) => {
  const eventName = event.replace(/\s/g, "_");

  return new prom.Histogram({
    name: eventName,
    help: `${eventName} histogram`,
    labelNames,
    buckets,
  });
};
