import React, { createContext, useContext, useState } from "react";

export type Language = "bg" | "en" | "ro";

// Using Unicode escapes for Bulgarian quotation marks: \u201E = „ and \u201C = "
const Q = "\u201E"; // „
const QC = "\u201C"; // "

const translations = {
  bg: {
    nav: { about: "\u0417\u0430 \u043A\u044A\u0449\u0430\u0442\u0430", rooms: "\u0421\u0442\u0430\u0438", amenities: "\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u0430", gallery: "\u0413\u0430\u043B\u0435\u0440\u0438\u044F", location: "\u041B\u043E\u043A\u0430\u0446\u0438\u044F", contact: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438" },
    hero: {
      title: "\u0422\u0430\u043C, \u043A\u044A\u0434\u0435\u0442\u043E \u0434\u0443\u0445\u044A\u0442 \u043D\u0430 \u0441\u0442\u0430\u0440\u043E \u0422\u044A\u0440\u043D\u043E\u0432\u043E \u043E\u0436\u0438\u0432\u044F\u0432\u0430",
      subtitle: "\u0411\u0443\u0442\u0438\u043A\u043E\u0432\u0430 \u043A\u044A\u0449\u0430 \u0437\u0430 \u0433\u043E\u0441\u0442\u0438 \u0432 \u0441\u044A\u0440\u0446\u0435\u0442\u043E \u043D\u0430 \u0412\u0435\u043B\u0438\u043A\u043E \u0422\u044A\u0440\u043D\u043E\u0432\u043E \u2013 \u0441\u044A\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043E\u0442 \u0432\u044A\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0441\u043A\u0430 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430, \u0443\u044E\u0442 \u0438 \u0441\u044A\u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043D \u043A\u043E\u043C\u0444\u043E\u0440\u0442.",
      cta1: "\u041D\u0430\u043F\u0440\u0430\u0432\u0438 \u0437\u0430\u043F\u0438\u0442\u0432\u0430\u043D\u0435",
      cta2: "\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439 \u0441\u0442\u0430\u0438\u0442\u0435",
    },
    about: {
      title: "\u0417\u0430 \u043A\u044A\u0449\u0430\u0442\u0430",
      p1: `\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u0430\u0442\u0430 \u043A\u044A\u0449\u0430 ${Q}\u0421\u0432\u0435\u0442\u0438 \u0421\u0430\u0432\u0430${QC} \u0441\u0435 \u043D\u0430\u043C\u0438\u0440\u0430 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u0442\u0430 \u0447\u0430\u0441\u0442 \u043D\u0430 \u0412\u0435\u043B\u0438\u043A\u043E \u0422\u044A\u0440\u043D\u043E\u0432\u043E \u2013 \u0441\u0440\u0435\u0434 \u043A\u0430\u043B\u0434\u044A\u0440\u044A\u043C\u0435\u043D\u0438 \u0443\u043B\u0438\u0447\u043A\u0438, \u0441\u0442\u0430\u0440\u0438\u043D\u043D\u0438 \u0444\u0430\u0441\u0430\u0434\u0438 \u0438 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u0430 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430.`,
      p2: "\u0420\u0430\u0437\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0430 \u043D\u0430 \u0443\u043B. \u0413\u0435\u043D. \u0413\u0443\u0440\u043A\u043E, \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u0438\u044F \u0440\u0435\u0437\u0435\u0440\u0432\u0430\u0442 \u043D\u0430 \u0441\u0442\u0430\u0440\u0438\u044F \u0433\u0440\u0430\u0434, \u043A\u044A\u0449\u0430\u0442\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0438 \u0433\u043B\u0435\u0434\u043A\u0438 \u043A\u044A\u043C \u0440\u0435\u043A\u0430 \u042F\u043D\u0442\u0440\u0430 \u0438 \u0441\u0442\u0430\u0440\u0438\u0442\u0435 \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0438.",
      p3: "\u0422\u0443\u043A \u0432\u0440\u0435\u043C\u0435\u0442\u043E \u0441\u044F\u043A\u0430\u0448 \u0437\u0430\u0431\u0430\u0432\u044F \u0441\u0432\u043E\u044F \u0445\u043E\u0434. \u0429\u0435 \u0443\u0441\u0435\u0442\u0438\u0442\u0435 \u0441\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0435, \u0442\u0438\u0448\u0438\u043D\u0430 \u0438 \u0443\u044E\u0442, \u043A\u043E\u0438\u0442\u043E \u043F\u0440\u0435\u0432\u0440\u044A\u0449\u0430\u0442 \u0432\u0441\u044F\u043A\u0430 \u043D\u043E\u0449\u0443\u0432\u043A\u0430 \u0432 \u0438\u0441\u0442\u0438\u043D\u0441\u043A\u043E \u043F\u0440\u0435\u0436\u0438\u0432\u044F\u0432\u0430\u043D\u0435.",
      p4: "\u041A\u044A\u0449\u0430\u0442\u0430 \u0441\u044A\u0447\u0435\u0442\u0430\u0432\u0430 \u0430\u0432\u0442\u0435\u043D\u0442\u0438\u0447\u043D\u0438\u044F \u0434\u0443\u0445 \u043D\u0430 \u0441\u0442\u0430\u0440\u043E\u043F\u0440\u0435\u0441\u0442\u043E\u043B\u043D\u0438\u044F \u0433\u0440\u0430\u0434 \u0441 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430\u0442\u0430 \u043D\u0430 \u0441\u044A\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0442\u043E \u043D\u0430\u0441\u0442\u0430\u043D\u044F\u0432\u0430\u043D\u0435 \u2013 \u0438\u0434\u0435\u0430\u043B\u043D\u043E \u043C\u044F\u0441\u0442\u043E \u0437\u0430 \u0440\u043E\u043C\u0430\u043D\u0442\u0438\u0447\u043D\u0430 \u043F\u043E\u0447\u0438\u0432\u043A\u0430, \u0443\u0438\u043A\u0435\u043D\u0434 \u0431\u044F\u0433\u0441\u0442\u0432\u043E \u0438\u043B\u0438 \u0441\u0435\u043C\u0435\u0439\u043D\u043E \u043F\u044A\u0442\u0443\u0432\u0430\u043D\u0435.",
    },
    rooms: {
      title: "\u0421\u0442\u0430\u0438 \u0438 \u043D\u0430\u0441\u0442\u0430\u043D\u044F\u0432\u0430\u043D\u0435",
      features: {
        bed: "\u0414\u0432\u043E\u0439\u043D\u043E \u043B\u0435\u0433\u043B\u043E",
        bathroom: "\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u043D\u0430 \u0431\u0430\u043D\u044F",
        ac: "\u041A\u043B\u0438\u043C\u0430\u0442\u0438\u043A",
        tv: "\u0422\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440 \u0441 \u043F\u043B\u043E\u0441\u044A\u043A \u0435\u043A\u0440\u0430\u043D",
        wifi: "\u0411\u0435\u0437\u043F\u043B\u0430\u0442\u0435\u043D Wi-Fi",
        kitchen: "\u041A\u0443\u0445\u043D\u0435\u043D\u0441\u043A\u0438 \u0431\u043E\u043A\u0441",
        coffee: "\u041A\u044A\u0442 \u0437\u0430 \u043A\u0430\u0444\u0435 \u0438 \u0447\u0430\u0439",
        balcony: "\u0411\u0430\u043B\u043A\u043E\u043D \u0441 \u0433\u043B\u0435\u0434\u043A\u0430",
        view: "\u0413\u043B\u0435\u0434\u043A\u0430 \u043A\u044A\u043C \u0441\u0442\u0430\u0440\u0430\u0442\u0430 \u0447\u0430\u0441\u0442",
        laundry: "\u0414\u043E\u0441\u0442\u044A\u043F \u0434\u043E \u043F\u0435\u0440\u0430\u043B\u043D\u043E \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435",
      },
      room1: `\u0421\u0442\u0430\u044F ${Q}\u0420\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430${QC}`,
      room1desc: "\u041F\u0440\u043E\u0441\u0442\u043E\u0440\u043D\u0430 \u0441\u0442\u0430\u044F \u0441 \u0434\u0432\u043E\u0439\u043D\u043E \u043B\u0435\u0433\u043B\u043E, \u0431\u0430\u043B\u043A\u043E\u043D \u0438 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0430 \u0433\u043B\u0435\u0434\u043A\u0430 \u043A\u044A\u043C \u0441\u0442\u0430\u0440\u0430\u0442\u0430 \u0447\u0430\u0441\u0442 \u043D\u0430 \u0412\u0435\u043B\u0438\u043A\u043E \u0422\u044A\u0440\u043D\u043E\u0432\u043E.",
      room2: `\u0421\u0442\u0430\u044F ${Q}\u0423\u044E\u0442${QC}`,
      room2desc: "\u0421\u0442\u0438\u043B\u043D\u043E \u043E\u0431\u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0430 \u0441\u0442\u0430\u044F \u0441 \u043C\u043E\u0434\u0435\u0440\u043D\u0438 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430, \u043A\u0443\u0445\u043D\u0435\u043D\u0441\u043A\u0438 \u0431\u043E\u043A\u0441 \u0438 \u0435\u0441\u043F\u0440\u0435\u0441\u043E \u043C\u0430\u0448\u0438\u043D\u0430.",
      room3: "\u0421\u0435\u043C\u0435\u0435\u043D \u0430\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442",
      room3desc: "\u041F\u0440\u043E\u0441\u0442\u043E\u0440\u0435\u043D \u0430\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442, \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449 \u0437\u0430 \u0441\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u0430 \u2013 \u0441 \u043E\u0442\u0434\u0435\u043B\u043D\u0430 \u0437\u043E\u043D\u0430 \u0437\u0430 \u0445\u0440\u0430\u043D\u0435\u043D\u0435 \u0438 \u043F\u044A\u043B\u0435\u043D \u043A\u043E\u043C\u0444\u043E\u0440\u0442.",
    },
    amenities: {
      title: "\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u0430",
      items: [
        "\u0411\u0435\u0437\u043F\u043B\u0430\u0442\u0435\u043D \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442",
        "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u0430 \u043B\u043E\u043A\u0430\u0446\u0438\u044F \u0432 \u0441\u0442\u0430\u0440\u0438\u044F \u0433\u0440\u0430\u0434",
        "\u041F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u043E \u0437\u0430 \u0434\u0432\u043E\u0439\u043A\u0438 \u0438 \u0441\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u0430",
        "\u0422\u0438\u0445\u0430 \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u0430 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430",
        "\u0412 \u0431\u043B\u0438\u0437\u043E\u0441\u0442 \u0434\u043E \u043A\u0443\u043B\u0442\u0443\u0440\u043D\u0438 \u0437\u0430\u0431\u0435\u043B\u0435\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442\u0438",
        "\u0421\u043F\u0430\u043B\u043D\u043E \u0431\u0435\u043B\u044C\u043E \u0438 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0432\u044A\u0437\u0433\u043B\u0430\u0432\u043D\u0438\u0446\u0438",
        "\u041F\u0440\u0435\u043F\u043E\u0440\u044A\u0447\u0430\u043D\u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0442\u0438 \u0438 \u043C\u0443\u0437\u0435\u0438",
      ],
    },
    spa: {
      title: "\u0414\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438",
      p1: "\u0412 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u0430 \u0431\u043B\u0438\u0437\u043E\u0441\u0442 \u0434\u043E \u043A\u044A\u0449\u0430\u0442\u0430 \u0441\u0435 \u043D\u0430\u043C\u0438\u0440\u0430 \u0445\u043E\u0442\u0435\u043B \u0441\u044A\u0441 \u0421\u041F\u0410 \u0446\u0435\u043D\u0442\u044A\u0440, \u0431\u0430\u0441\u0435\u0439\u043D \u0438 \u0443\u0435\u043B\u043D\u0435\u0441 \u0437\u043E\u043D\u0430.",
      p2: "\u041D\u0430\u0448\u0438\u0442\u0435 \u0433\u043E\u0441\u0442\u0438 \u043C\u043E\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0432\u044A\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442 \u043E\u0442 \u0442\u0435\u0437\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0441\u0440\u0435\u0449\u0443 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u043E \u0437\u0430\u043F\u043B\u0430\u0449\u0430\u043D\u0435 \u0438 \u043F\u0440\u0438 \u043D\u0430\u043B\u0438\u0447\u043D\u043E\u0441\u0442.",
      p3: "\u0421\u041F\u0410 \u0443\u0441\u043B\u0443\u0433\u0438\u0442\u0435 \u043D\u0435 \u0441\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438 \u0432 \u0446\u0435\u043D\u0430\u0442\u0430 \u043D\u0430 \u043D\u043E\u0449\u0443\u0432\u043A\u0430\u0442\u0430.",
      p4: "\u0422\u0430\u0437\u0438 \u0432\u044A\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430 \u0434\u0430 \u0441\u044A\u0447\u0435\u0442\u0430\u0435\u0442\u0435 \u0443\u044E\u0442\u0430 \u043D\u0430 \u0432\u044A\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0441\u043A\u0430\u0442\u0430 \u043A\u044A\u0449\u0430 \u0441 \u043C\u043E\u0434\u0435\u0440\u043D\u043E \u0440\u0435\u043B\u0430\u043A\u0441 \u0438\u0437\u0436\u0438\u0432\u044F\u0432\u0430\u043D\u0435.",
    },
    parking: {
      title: "\u041F\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u0435 \u0438 \u0434\u043E\u0441\u0442\u044A\u043F",
      items: [
        "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0438 \u043C\u0435\u0441\u0442\u0430 \u0437\u0430 \u043F\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u0435 \u0432 \u0440\u0430\u0439\u043E\u043D\u0430",
        "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u0443\u043B. \u0413\u0435\u043D. \u0413\u0443\u0440\u043A\u043E",
        "\u0410\u043B\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u0438 \u0443\u043B\u0438\u0446\u0438 \u0437\u0430 \u043F\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u0435",
        `\u041E\u0440\u0438\u0435\u043D\u0442\u0438\u0440: \u043C\u0435\u0445\u0430\u043D\u0430 ${Q}\u0422\u0438\u0445\u0438\u044F\u0442 \u041A\u044A\u0442${QC}`,
      ],
    },
    pdf: "\u0418\u0437\u0442\u0435\u0433\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0437\u0430 \u0441\u0430\u043C\u043E\u043D\u0430\u0441\u0442\u0430\u043D\u044F\u0432\u0430\u043D\u0435",
    location: {
      title: "\u0412 \u0441\u044A\u0440\u0446\u0435\u0442\u043E \u043D\u0430 \u0441\u0442\u0430\u0440\u043E\u043F\u0440\u0435\u0441\u0442\u043E\u043B\u043D\u0438\u044F \u0433\u0440\u0430\u0434",
      desc: "\u0420\u0430\u0437\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0430 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u0442\u0430 \u0447\u0430\u0441\u0442 \u043D\u0430 \u0412\u0435\u043B\u0438\u043A\u043E \u0422\u044A\u0440\u043D\u043E\u0432\u043E, \u043A\u044A\u0449\u0430\u0442\u0430 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430 \u043B\u0435\u0441\u0435\u043D \u0434\u043E\u0441\u0442\u044A\u043F \u0434\u043E \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0442\u0438, \u043C\u0443\u0437\u0435\u0438 \u0438 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0438 \u0433\u043B\u0435\u0434\u043A\u0438.",
      distances: [
        ["\u0426\u0430\u0440\u0435\u0432\u0435\u0446", "~1.5 \u043A\u043C"],
        ["\u0410\u0440\u0445\u0435\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u043C\u0443\u0437\u0435\u0439", "~700 \u043C"],
        [`\u0426\u044A\u0440\u043A\u0432\u0430 ${Q}\u0421\u0432. 40 \u043C\u044A\u0447\u0435\u043D\u0438\u0446\u0438${QC}`, "~1.4 \u043A\u043C"],
        ["\u041F\u0430\u043C\u0435\u0442\u043D\u0438\u043A \u043D\u0430 \u0410\u0441\u0435\u043D\u0435\u0432\u0446\u0438", "~900 \u043C"],
        ["\u0410\u0440\u0431\u0430\u043D\u0430\u0441\u0438", "~5 \u043A\u043C"],
        ["\u0426\u0435\u043D\u0442\u044A\u0440", "~500 \u043C"],
        ["\u0410\u0432\u0442\u043E\u0433\u0430\u0440\u0430", "~2 \u043A\u043C"],
      ] as [string, string][],
    },
    gallery: { title: "\u0413\u0430\u043B\u0435\u0440\u0438\u044F" },
    contact: {
      title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438 \u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u0430\u0446\u0438\u0438",
      name: "\u0418\u043C\u0435",
      phone: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      email: "\u0418\u043C\u0435\u0439\u043B",
      dates: "\u0414\u0430\u0442\u0438 \u043D\u0430 \u043D\u0430\u0441\u0442\u0430\u043D\u044F\u0432\u0430\u043D\u0435",
      message: "\u0421\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
      send: "\u0418\u0437\u043F\u0440\u0430\u0442\u0438 \u0437\u0430\u043F\u0438\u0442\u0432\u0430\u043D\u0435",
      closing: "\u041E\u0447\u0430\u043A\u0432\u0430\u043C\u0435 \u0412\u0438, \u0437\u0430 \u0434\u0430 \u0438\u0437\u0436\u0438\u0432\u0435\u0435\u0442\u0435 \u043C\u0430\u0433\u0438\u044F\u0442\u0430 \u043D\u0430 \u0441\u0442\u0430\u0440\u043E \u0422\u044A\u0440\u043D\u043E\u0432\u043E.",
    },
    footer: {
      slogan: "\u041F\u043E\u0432\u0435\u0447\u0435 \u043E\u0442 \u043D\u043E\u0449\u0443\u0432\u043A\u0430 \u2013 \u043F\u0440\u0435\u0436\u0438\u0432\u044F\u0432\u0430\u043D\u0435.",
    },
  },
  en: {
    nav: { about: "About", rooms: "Rooms", amenities: "Amenities", gallery: "Gallery", location: "Location", contact: "Contact" },
    hero: {
      title: "Where the spirit of old Tarnovo comes alive",
      subtitle: "A boutique guesthouse in the heart of Veliko Tarnovo \u2013 a blend of Revival atmosphere, warmth, and modern comfort.",
      cta1: "Make an inquiry",
      cta2: "View rooms",
    },
    about: {
      title: "About the House",
      p1: `The Legendary House ${Q}Sveti Sava${QC} is located in the historic part of Veliko Tarnovo \u2013 among cobblestone streets, antique facades, and a unique atmosphere.`,
      p2: "Situated on Gen. Gurko Street, in the architectural reserve of the old town, the house offers panoramic views of the Yantra River and the old quarters.",
      p3: "Here, time seems to slow down. You will feel peace, silence, and warmth that turn every night into a true experience.",
      p4: "The house combines the authentic spirit of the old capital with modern accommodation amenities \u2013 the perfect place for a romantic getaway, weekend escape, or family trip.",
    },
    rooms: {
      title: "Rooms & Accommodation",
      features: {
        bed: "Double bed",
        bathroom: "Private bathroom",
        ac: "Air conditioning",
        tv: "Flat-screen TV",
        wifi: "Free Wi-Fi",
        kitchen: "Kitchenette",
        coffee: "Coffee & tea corner",
        balcony: "Balcony with view",
        view: "Old town view",
        laundry: "Laundry access",
      },
      room1: `Room ${Q}Romance${QC}`,
      room1desc: "Spacious room with a double bed, balcony, and panoramic view of the old town of Veliko Tarnovo.",
      room2: `Room ${Q}Comfort${QC}`,
      room2desc: "Stylishly furnished room with modern amenities, kitchenette, and espresso machine.",
      room3: "Family Apartment",
      room3desc: "Spacious apartment ideal for families \u2013 with a separate dining area and full comfort.",
    },
    amenities: {
      title: "Amenities",
      items: [
        "Free internet",
        "Central old town location",
        "Suitable for couples and families",
        "Quiet and peaceful atmosphere",
        "Near cultural landmarks",
        "Bed linen and extra pillows",
        "Recommended restaurants and museums",
      ],
    },
    spa: {
      title: "Additional Options",
      p1: "A hotel with a SPA center, pool, and wellness area is located near the house.",
      p2: "Our guests can take advantage of these services for an additional fee and subject to availability.",
      p3: "SPA services are not included in the room rate.",
      p4: "This option allows you to combine the comfort of the Revival house with a modern relaxation experience.",
    },
    parking: {
      title: "Parking & Access",
      items: [
        "Free parking spaces in the area",
        "Restrictions on Gen. Gurko Street",
        "Alternative parking streets",
        `Landmark: ${Q}Tihiyat Kat${QC} tavern`,
      ],
    },
    pdf: "Download self check-in instructions",
    location: {
      title: "In the heart of the old capital",
      desc: "Located in the historic part of Veliko Tarnovo, the house offers easy access to restaurants, museums, and panoramic views.",
      distances: [
        ["Tsarevets", "~1.5 km"],
        ["Archaeological Museum", "~700 m"],
        ["Church of the 40 Martyrs", "~1.4 km"],
        ["Asen Monument", "~900 m"],
        ["Arbanasi", "~5 km"],
        ["City Center", "~500 m"],
        ["Bus Station", "~2 km"],
      ] as [string, string][],
    },
    gallery: { title: "Gallery" },
    contact: {
      title: "Contact & Reservations",
      name: "Name",
      phone: "Phone",
      email: "Email",
      dates: "Check-in dates",
      message: "Message",
      send: "Send inquiry",
      closing: "We look forward to welcoming you to experience the magic of old Tarnovo.",
    },
    footer: {
      slogan: "More than a stay \u2013 an experience.",
    },
  },
  ro: {
    nav: { about: "Despre", rooms: "Camere", amenities: "Facilit\u0103\u021Bi", gallery: "Galerie", location: "Loca\u021Bie", contact: "Contact" },
    hero: {
      title: "Unde spiritul vechiului T\u00E2rnovo prinde via\u021B\u0103",
      subtitle: "O cas\u0103 de oaspe\u021Bi boutique \u00EEn inima ora\u0219ului Veliko T\u00E2rnovo \u2013 o combina\u021Bie de atmosfer\u0103 renascen\u0163ist\u0103, c\u0103ldur\u0103 \u0219i confort modern.",
      cta1: "Trimite o cerere",
      cta2: "Vezi camerele",
    },
    about: {
      title: "Despre cas\u0103",
      p1: `Casa legendar\u0103 ${Q}Sf\u00E2ntul Sava${QC} este situat\u0103 \u00EEn partea istoric\u0103 a ora\u0219ului Veliko T\u00E2rnovo \u2013 printre str\u0103zi pavate, fa\u021Bade antice \u0219i o atmosfer\u0103 unic\u0103.`,
      p2: "Situat\u0103 pe strada Gen. Gurko, \u00EEn rezerva\u021Bia arhitectural\u0103 a ora\u0219ului vechi, casa ofer\u0103 vederi panoramice asupra r\u00E2ului Yantra \u0219i cartierele vechi.",
      p3: "Aici, timpul pare s\u0103 \u00EEncetineasc\u0103. Ve\u021Bi sim\u021Bi lini\u0219tea, t\u0103cerea \u0219i c\u0103ldura care transform\u0103 fiecare noapte \u00EEntr-o experien\u021B\u0103 autentic\u0103.",
      p4: "Casa combin\u0103 spiritul autentic al vechii capitale cu facilit\u0103\u021Bile caz\u0103rii moderne \u2013 locul ideal pentru o escapad\u0103 romantic\u0103, un weekend de evadare sau o c\u0103l\u0103torie \u00EEn familie.",
    },
    rooms: {
      title: "Camere \u0219i cazare",
      features: {
        bed: "Pat dublu",
        bathroom: "Baie privat\u0103",
        ac: "Aer condi\u021Bionat",
        tv: "TV cu ecran plat",
        wifi: "Wi-Fi gratuit",
        kitchen: "Chicinet\u0103",
        coffee: "Col\u021B de cafea \u0219i ceai",
        balcony: "Balcon cu vedere",
        view: "Vedere ora\u0219 vechi",
        laundry: "Acces la sp\u0103l\u0103torie",
      },
      room1: `Camera ${Q}Romantic\u0103${QC}`,
      room1desc: "Camer\u0103 spa\u021Bioas\u0103 cu pat dublu, balcon \u0219i vedere panoramic\u0103 spre ora\u0219ul vechi.",
      room2: `Camera ${Q}Confort${QC}`,
      room2desc: "Camer\u0103 stilat mobilat\u0103 cu facilit\u0103\u021Bi moderne, chicinet\u0103 \u0219i espressor.",
      room3: "Apartament familial",
      room3desc: "Apartament spa\u021Bios ideal pentru familii \u2013 cu zon\u0103 separat\u0103 de luat masa.",
    },
    amenities: {
      title: "Facilit\u0103\u021Bi",
      items: [
        "Internet gratuit",
        "Loca\u021Bie central\u0103 \u00EEn ora\u0219ul vechi",
        "Potrivit pentru cupluri \u0219i familii",
        "Atmosfer\u0103 lini\u0219tit\u0103 \u0219i pa\u0219nic\u0103",
        "Aproape de obiective culturale",
        "Lenjerie de pat \u0219i perne suplimentare",
        "Restaurante \u0219i muzee recomandate",
      ],
    },
    spa: {
      title: "Op\u021Biuni suplimentare",
      p1: "Un hotel cu centru SPA, piscin\u0103 \u0219i zon\u0103 de wellness se afl\u0103 \u00EEn apropierea casei.",
      p2: "Oaspe\u021Bii no\u0219tri pot beneficia de aceste servicii contra cost \u0219i \u00EEn func\u021Bie de disponibilitate.",
      p3: "Serviciile SPA nu sunt incluse \u00EEn tariful camerei.",
      p4: "Aceast\u0103 op\u021Biune v\u0103 permite s\u0103 combina\u021Bi confortul casei renascen\u0163iste cu o experien\u021B\u0103 modern\u0103 de relaxare.",
    },
    parking: {
      title: "Parcare \u0219i acces",
      items: [
        "Locuri gratuite de parcare \u00EEn zon\u0103",
        "Restric\u021Bii pe strada Gen. Gurko",
        "Str\u0103zi alternative pentru parcare",
        `Reper: taverna ${Q}Tihiyat Kat${QC}`,
      ],
    },
    pdf: "Descarc\u0103 instruc\u021Biunile de self check-in",
    location: {
      title: "\u00CEn inima vechii capitale",
      desc: "Situat\u0103 \u00EEn partea istoric\u0103 a ora\u0219ului Veliko T\u00E2rnovo, casa ofer\u0103 acces u\u0219or la restaurante, muzee \u0219i vederi panoramice.",
      distances: [
        ["Tsarevets", "~1.5 km"],
        ["Muzeul Arheologic", "~700 m"],
        ["Biserica celor 40 de mucenici", "~1.4 km"],
        ["Monumentul Asen", "~900 m"],
        ["Arbanasi", "~5 km"],
        ["Centrul ora\u0219ului", "~500 m"],
        ["Autogara", "~2 km"],
      ] as [string, string][],
    },
    gallery: { title: "Galerie" },
    contact: {
      title: "Contact \u0219i rezerv\u0103ri",
      name: "Nume",
      phone: "Telefon",
      email: "Email",
      dates: "Date de cazare",
      message: "Mesaj",
      send: "Trimite cererea",
      closing: "V\u0103 a\u0219tept\u0103m s\u0103 tr\u0103i\u021Bi magia vechiului T\u00E2rnovo.",
    },
    footer: {
      slogan: "Mai mult dec\u00E2t o noapte \u2013 o experien\u021B\u0103.",
    },
  },
};

type Translations = typeof translations.bg;

const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}>({
  lang: "bg",
  setLang: () => {},
  t: translations.bg,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("bg");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
