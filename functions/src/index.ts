import {logger} from "firebase-functions";
import {setGlobalOptions} from "firebase-functions/v2";
import {onRequest} from "firebase-functions/v2/https";

setGlobalOptions({maxInstances: 10});

const websiteContactApiUrl =
  "https://api-prod.aathisoft.com/webportal/public/website-contact";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Cache-Control": "no-store",
};

export const websiteContact = onRequest(
  {
    region: "us-central1",
  },
  async (request, response) => {
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.setHeader(key, value);
    });

    if (request.method === "OPTIONS") {
      response.status(204).send("");
      return;
    }

    if (request.method !== "POST") {
      response.status(405).json({
        error: {
          statusCode: 405,
          message: "Method Not Allowed",
        },
      });
      return;
    }

    try {
      const upstreamResponse = await fetch(websiteContactApiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body ?? {}),
      });

      const responseText = await upstreamResponse.text();
      const upstreamContentType =
        upstreamResponse.headers.get("content-type") ?? "application/json";

      response
        .status(upstreamResponse.status)
        .setHeader("Content-Type", upstreamContentType)
        .send(responseText);
    } catch (error) {
      logger.error("Website contact API function error", error);
      response.status(502).json({
        error: {
          statusCode: 502,
          message: "Unable to connect to the website contact service",
        },
      });
    }
  },
);
