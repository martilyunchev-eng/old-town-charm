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
        twinBed: "\u0414\u0432\u0435 \u0435\u0434\u0438\u043D\u0438\u0447\u043D\u0438 \u043B\u0435\u0433\u043B\u0430",
        bathroom: "\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u043D\u0430 \u0431\u0430\u043D\u044F",
        ac: "\u041A\u043B\u0438\u043C\u0430\u0442\u0438\u043A",
        tv: "Smart TV \u0441 250+ \u043A\u0430\u043D\u0430\u043B\u0430",
        wifi: "\u0411\u0435\u0437\u043F\u043B\u0430\u0442\u0435\u043D Wi-Fi",
        kitchen: "\u041A\u0443\u0445\u043D\u0435\u043D\u0441\u043A\u0438 \u0431\u043E\u043A\u0441",
        coffee: "\u0415\u0441\u043F\u0440\u0435\u0441\u043E \u043C\u0430\u0448\u0438\u043D\u0430, \u043A\u0430\u0444\u0435 2\u04321 \u0438 3\u04321, \u0447\u0430\u0439",
        balcony: "\u0411\u0430\u043B\u043A\u043E\u043D \u0441 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0430 \u0433\u043B\u0435\u0434\u043A\u0430",
        view: "\u0413\u043B\u0435\u0434\u043A\u0430 \u043A\u044A\u043C \u0441\u0442\u0430\u0440\u0430\u0442\u0430 \u0447\u0430\u0441\u0442",
        laundry: "\u041F\u0435\u0440\u0430\u043B\u043D\u043E \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435",
        microwave: "\u041C\u0438\u043A\u0440\u043E\u0432\u044A\u043B\u043D\u043E\u0432\u0430 \u0441 \u0433\u0440\u0438\u043B",
        sofa: "\u0420\u0430\u0437\u0442\u0435\u0433\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u0438\u0432\u0430\u043D",
        dining: "\u0417\u043E\u043D\u0430 \u0437\u0430 \u0445\u0440\u0430\u043D\u0435\u043D\u0435",
        floor: "\u0415\u0442\u0430\u0436",
      },
      room1: "\u0421\u0442\u0430\u044F 101 \u2013 Double Superior",
      room1desc: "\u041F\u0440\u043E\u0441\u0442\u043E\u0440\u043D\u0430 \u0441\u0442\u0430\u044F \u043D\u0430 \u043F\u044A\u0440\u0432\u0438 \u0435\u0442\u0430\u0436 \u0441 \u0434\u0432\u043E\u0439\u043D\u043E \u043B\u0435\u0433\u043B\u043E, \u0431\u0430\u043B\u043A\u043E\u043D \u0438 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0430 \u0433\u043B\u0435\u0434\u043A\u0430 \u043A\u044A\u043C \u0440\u0435\u043A\u0430 \u042F\u043D\u0442\u0440\u0430 \u0438 \u0441\u0442\u0430\u0440\u0430\u0442\u0430 \u0447\u0430\u0441\u0442 \u043D\u0430 \u0412\u0435\u043B\u0438\u043A\u043E \u0422\u044A\u0440\u043D\u043E\u0432\u043E. \u041E\u0431\u043E\u0440\u0443\u0434\u0432\u0430\u043D\u0430 \u0441 \u043A\u043B\u0438\u043C\u0430\u0442\u0438\u043A, Smart TV \u0441 250+ \u043A\u0430\u043D\u0430\u043B\u0430, \u0435\u0441\u043F\u0440\u0435\u0441\u043E \u043C\u0430\u0448\u0438\u043D\u0430 \u0438 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u043D\u0430 \u0431\u0430\u043D\u044F.",
      room1floor: "1-\u0432\u0438 \u0435\u0442\u0430\u0436",
      room2: "\u0421\u0435\u043C\u0435\u0435\u043D \u0430\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442 201 / \u0421\u0442\u0443\u0434\u0438\u043E 301",
      room2desc: "\u041F\u0440\u043E\u0441\u0442\u043E\u0440\u0435\u043D \u0430\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442 \u043D\u0430 \u0432\u0442\u043E\u0440\u0438 \u0435\u0442\u0430\u0436 \u0441 \u0434\u0432\u043E\u0439\u043D\u043E \u043B\u0435\u0433\u043B\u043E, \u0440\u0430\u0437\u0442\u0435\u0433\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u0438\u0432\u0430\u043D, \u043F\u044A\u043B\u043D\u043E\u0446\u0435\u043D\u0435\u043D \u043A\u0443\u0445\u043D\u0435\u043D\u0441\u043A\u0438 \u0431\u043E\u043A\u0441 \u0441 \u043C\u0438\u043A\u0440\u043E\u0432\u044A\u043B\u043D\u043E\u0432\u0430 \u0433\u0440\u0438\u043B, \u0437\u043E\u043D\u0430 \u0437\u0430 \u0445\u0440\u0430\u043D\u0435\u043D\u0435 \u0438 \u0431\u0430\u043B\u043A\u043E\u043D \u0441 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0430 \u0433\u043B\u0435\u0434\u043A\u0430. \u0421\u0442\u0443\u0434\u0438\u043E 301 \u043D\u0430 \u0442\u0440\u0435\u0442\u0438 \u0435\u0442\u0430\u0436 \u0434\u043E\u043F\u044A\u043B\u0432\u0430 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E\u0442\u043E \u0441 \u0434\u0432\u043E\u0439\u043D\u043E \u043B\u0435\u0433\u043B\u043E, \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u043E \u0435\u0434\u0438\u043D\u0438\u0447\u043D\u043E \u043B\u0435\u0433\u043B\u043E, \u043A\u0443\u0445\u043D\u0435\u043D\u0441\u043A\u0438 \u0431\u043E\u043A\u0441 \u0438 Smart TV. \u0418\u0434\u0435\u0430\u043B\u043D\u043E \u0437\u0430 \u0441\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u0430 \u0438\u043B\u0438 \u043F\u043E-\u0434\u044A\u043B\u044A\u0433 \u043F\u0440\u0435\u0441\u0442\u043E\u0439.",
      room2floor: "2-\u0440\u0438 \u0438 3-\u0442\u0438 \u0435\u0442\u0430\u0436",
      room3: "\u0421\u0442\u0443\u0434\u0438\u043E 302 \u2013 Triple Superior",
      room3desc: "\u0423\u044E\u0442\u043D\u043E \u0441\u0442\u0443\u0434\u0438\u043E \u043D\u0430 \u0442\u0440\u0435\u0442\u0438 \u0435\u0442\u0430\u0436 \u0441 \u0434\u0432\u043E\u0439\u043D\u043E \u043B\u0435\u0433\u043B\u043E \u0438 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u043E \u0435\u0434\u0438\u043D\u0438\u0447\u043D\u043E \u043B\u0435\u0433\u043B\u043E \u0437\u0430\u0434 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u0437\u0430\u0432\u0435\u0441\u0430, \u043F\u044A\u043B\u043D\u043E\u0446\u0435\u043D\u0435\u043D \u043A\u0443\u0445\u043D\u0435\u043D\u0441\u043A\u0438 \u0431\u043E\u043A\u0441 \u0441 \u043A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u043D \u043F\u043B\u043E\u0442, \u043C\u0438\u043A\u0440\u043E\u0432\u044A\u043B\u043D\u043E\u0432\u0430 \u0438 \u0445\u043B\u0430\u0434\u0438\u043B\u043D\u0438\u043A, \u0437\u043E\u043D\u0430 \u0437\u0430 \u0445\u0440\u0430\u043D\u0435\u043D\u0435 \u0438 \u0431\u0430\u043B\u043A\u043E\u043D \u0441 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0430 \u0433\u043B\u0435\u0434\u043A\u0430 \u043A\u044A\u043C \u0441\u0442\u0430\u0440\u0430\u0442\u0430 \u0447\u0430\u0441\u0442 \u0438 \u041F\u0430\u043C\u0435\u0442\u043D\u0438\u043A\u0430 \u043D\u0430 \u0410\u0441\u0435\u043D\u0435\u0432\u0446\u0438. \u0421\u0442\u0438\u043B\u043D\u0430 \u0431\u0430\u043D\u044F \u0441 \u0434\u0443\u0448 \u043A\u0430\u0431\u0438\u043D\u0430 \u0438 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u0438 \u043F\u043B\u043E\u0447\u043A\u0438.",
      room3floor: "3-\u0442\u0438 \u0435\u0442\u0430\u0436",
    },
    amenities: {
      title: "\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u0430",
      items: [
        "\u0411\u0435\u0437\u043F\u043B\u0430\u0442\u0435\u043D \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0435\u043D Wi-Fi",
        "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u0430 \u043B\u043E\u043A\u0430\u0446\u0438\u044F \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u0438\u044F \u0440\u0435\u0437\u0435\u0440\u0432\u0430\u0442",
        "Smart TV \u0441 250+ \u043A\u0430\u043D\u0430\u043B\u0430 \u0432\u044A\u0432 \u0432\u0441\u044F\u043A\u0430 \u0441\u0442\u0430\u044F",
        "\u0415\u0441\u043F\u0440\u0435\u0441\u043E \u043C\u0430\u0448\u0438\u043D\u0430, \u043A\u0430\u0444\u0435 2\u04321/3\u04321 \u0438 \u0447\u0430\u0439",
        "\u041C\u0438\u043A\u0440\u043E\u0432\u044A\u043B\u043D\u043E\u0432\u0430 \u0441 \u0433\u0440\u0438\u043B (\u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u0438 \u0441\u0442\u0430\u0438)",
        "\u041F\u0435\u0440\u0430\u043B\u043D\u043E \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0441 \u043F\u0435\u0440\u0430\u043B\u043D\u044F, \u0441\u0443\u0448\u0438\u043B\u043D\u044F \u0438 \u044E\u0442\u0438\u044F",
        "\u0422\u0438\u0445\u0430 \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u0430 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430",
        "\u0421\u043F\u0430\u043B\u043D\u043E \u0431\u0435\u043B\u044C\u043E \u0438 \u0434\u043E\u043F\u044A\u043B\u043D\u0438\u0442\u0435\u043B\u043D\u0438 \u0432\u044A\u0437\u0433\u043B\u0430\u0432\u043D\u0438\u0446\u0438",
        "\u041F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u043E \u0437\u0430 \u0434\u0432\u043E\u0439\u043A\u0438 \u0438 \u0441\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u0430",
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
        `\u0411\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E \u043F\u0430\u0440\u043A\u0438\u0440\u0430\u043D\u0435 \u0432 \u0431\u043B\u0438\u0437\u043E\u0441\u0442 \u0434\u043E \u043C\u0435\u0445\u0430\u043D\u0430 ${Q}\u0422\u0438\u0445\u0438\u044F\u0442 \u041A\u044A\u0442${QC}`,
        "\u041D\u0435 \u0432\u043B\u0438\u0437\u0430\u0439\u0442\u0435 \u0441 \u043A\u043E\u043B\u0430 \u043F\u043E \u0443\u043B. \u0413\u0435\u043D. \u0413\u0443\u0440\u043A\u043E \u2013 \u0443\u043B\u0438\u0446\u0430\u0442\u0430 \u0435 \u0442\u044F\u0441\u043D\u0430 \u0438 \u0441\u0442\u0440\u044A\u043C\u043D\u0430",
        "\u0410\u043B\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u0438 \u0443\u043B\u0438\u0446\u0438: \u0425\u0430\u0434\u0436\u0438 \u0414\u0438\u043C\u0438\u0442\u044A\u0440 \u0438 \u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u041F\u0430\u0432\u043B\u043E\u0432\u0438\u0447",
        "\u041E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u0430\u0439\u0442\u0435 \u0441\u0435 \u043F\u043E \u043C\u0435\u0445\u0430\u043D\u0430\u0442\u0430 \u0438 \u043F\u0430\u0440\u043A\u0438\u0440\u0430\u0439\u0442\u0435 \u043D\u0430\u0431\u043B\u0438\u0437\u043E",
      ],
      note: "\u041F\u0440\u0435\u043F\u043E\u0440\u044A\u0447\u0432\u0430\u043C\u0435 \u0434\u0430 \u043F\u0430\u0440\u043A\u0438\u0440\u0430\u0442\u0435 \u043D\u0430 \u043D\u044F\u043A\u043E\u044F \u043E\u0442 \u0441\u044A\u0441\u0435\u0434\u043D\u0438\u0442\u0435 \u0443\u043B\u0438\u0446\u0438 \u0438 \u0434\u0430 \u0441\u0435 \u0440\u0430\u0437\u0445\u043E\u0434\u0438\u0442\u0435 \u043F\u0435\u0448\u0430 \u0434\u043E \u043A\u044A\u0449\u0430\u0442\u0430 \u2013 \u0440\u0430\u0437\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u0442\u043E \u0435 \u043E\u043A\u043E\u043B\u043E 3\u20135 \u043C\u0438\u043D\u0443\u0442\u0438.",
    },
    pdf: "\u0418\u0437\u0442\u0435\u0433\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u0437\u0430 \u0441\u0430\u043C\u043E\u043D\u0430\u0441\u0442\u0430\u043D\u044F\u0432\u0430\u043D\u0435",
    location: {
      title: "\u0412 \u0441\u044A\u0440\u0446\u0435\u0442\u043E \u043D\u0430 \u0441\u0442\u0430\u0440\u043E\u043F\u0440\u0435\u0441\u0442\u043E\u043B\u043D\u0438\u044F \u0433\u0440\u0430\u0434",
      desc: "\u041A\u044A\u0449\u0430\u0442\u0430 \u0441\u0435 \u043D\u0430\u043C\u0438\u0440\u0430 \u043D\u0430 \u0443\u043B. \u0413\u0435\u043D\u0435\u0440\u0430\u043B \u0413\u0443\u0440\u043A\u043E \u2013 \u0432 \u0441\u044A\u0440\u0446\u0435\u0442\u043E \u043D\u0430 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u0438\u044F \u0440\u0435\u0437\u0435\u0440\u0432\u0430\u0442 \u043D\u0430 \u0412\u0435\u043B\u0438\u043A\u043E \u0422\u044A\u0440\u043D\u043E\u0432\u043E, \u0441\u0440\u0435\u0434 \u043D\u0430\u0434 200-\u0433\u043E\u0434\u0438\u0448\u043D\u0438 \u0432\u044A\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0441\u043A\u0438 \u043A\u044A\u0449\u0438 \u0441 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043D\u0438 \u0435\u0440\u043A\u0435\u0440\u0438 \u0438 \u0434\u044A\u0440\u0432\u0435\u043D\u0438 \u0447\u0430\u0440\u0434\u0430\u0446\u0438. \u041A\u0430\u043B\u0434\u044A\u0440\u044A\u043C\u0435\u043D\u0430\u0442\u0430 \u0443\u043B\u0438\u0446\u0430 \u0441\u0435 \u0432\u0438\u0435 \u043F\u043E \u0441\u043A\u043B\u043E\u043D\u0430 \u043D\u0430\u0434 \u0440\u0435\u043A\u0430 \u042F\u043D\u0442\u0440\u0430, \u043E\u0442\u043A\u0440\u0438\u0432\u0430\u0439\u043A\u0438 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0438 \u0433\u043B\u0435\u0434\u043A\u0438 \u043A\u044A\u043C \u041F\u0430\u043C\u0435\u0442\u043D\u0438\u043A\u0430 \u043D\u0430 \u0410\u0441\u0435\u043D\u0435\u0432\u0446\u0438 \u0438 \u0441\u0442\u0430\u0440\u0438\u0442\u0435 \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0438.",
      desc2: "\u0412 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u0430 \u0431\u043B\u0438\u0437\u043E\u0441\u0442 \u0441\u0430 \u0410\u0440\u0445\u0435\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u044F\u0442 \u043C\u0443\u0437\u0435\u0439, \u043A\u0440\u0435\u043F\u043E\u0441\u0442\u0442\u0430 \u0426\u0430\u0440\u0435\u0432\u0435\u0446, \u0410\u0440\u0431\u0430\u043D\u0430\u0441\u0438, \u043A\u0430\u043A\u0442\u043E \u0438 \u043D\u0430\u0439-\u0442\u044F\u0441\u043D\u0430\u0442\u0430 \u0443\u043B\u0438\u0446\u0430 \u0432 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F. \u0422\u043E\u0432\u0430 \u0435 \u043C\u044F\u0441\u0442\u043E, \u043A\u044A\u0434\u0435\u0442\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u044F\u0442\u0430 \u0441\u0435 \u0443\u0441\u0435\u0449\u0430 \u043D\u0430 \u0432\u0441\u044F\u043A\u0430 \u043A\u0440\u0430\u0447\u043A\u0430.",
      distances: [
        ["\u0426\u0430\u0440\u0435\u0432\u0435\u0446", "~1.5 \u043A\u043C"],
        ["\u0410\u0440\u0445\u0435\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u043C\u0443\u0437\u0435\u0439", "~700 \u043C"],
        [`\u0426\u044A\u0440\u043A\u0432\u0430 ${Q}\u0421\u0432. 40 \u043C\u044A\u0447\u0435\u043D\u0438\u0446\u0438${QC}`, "~1.4 \u043A\u043C"],
        ["\u041F\u0430\u043C\u0435\u0442\u043D\u0438\u043A \u043D\u0430 \u0410\u0441\u0435\u043D\u0435\u0432\u0446\u0438", "~900 \u043C"],
        ["\u041D\u0430\u0439-\u0442\u044F\u0441\u043D\u0430\u0442\u0430 \u0443\u043B\u0438\u0446\u0430 \u0432 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F", "~200 \u043C"],
        ["\u0410\u0440\u0431\u0430\u043D\u0430\u0441\u0438", "~5 \u043A\u043C"],
        ["\u0426\u0435\u043D\u0442\u044A\u0440", "~500 \u043C"],
        ["\u0410\u0432\u0442\u043E\u0433\u0430\u0440\u0430", "~2 \u043A\u043C"],
      ] as [string, string][],
    },
    views: {
      title: "\u0413\u043B\u0435\u0434\u043A\u0438 \u0438 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430",
      subtitle: "\u0413\u0440\u0430\u0434\u044A\u0442, \u043A\u043E\u0439\u0442\u043E \u043E\u0441\u0442\u0430\u0432\u0430 \u0432 \u0441\u044A\u0440\u0446\u0435\u0442\u043E",
      desc: "\u041E\u0442 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0438\u0442\u0435 \u0433\u043B\u0435\u0434\u043A\u0438 \u043A\u044A\u043C \u0440\u0435\u043A\u0430 \u042F\u043D\u0442\u0440\u0430 \u0434\u043E \u0432\u0435\u0447\u0435\u0440\u043D\u0438\u0442\u0435 \u0441\u0432\u0435\u0442\u043B\u0438\u043D\u0438 \u043D\u0430 \u0426\u0430\u0440\u0435\u0432\u0435\u0446 \u2013 \u0442\u0443\u043A \u0432\u0441\u044F\u043A\u0430 \u0440\u0430\u0437\u0445\u043E\u0434\u043A\u0430 \u0435 \u043F\u0440\u0435\u0436\u0438\u0432\u044F\u0432\u0430\u043D\u0435.",
      gurkoTitle: "\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u0430\u0442\u0430 \u0443\u043B\u0438\u0446\u0430 \u0413\u0435\u043D\u0435\u0440\u0430\u043B \u0413\u0443\u0440\u043A\u043E",
      gurkoP1: "\u0423\u043B\u0438\u0446\u0430 \u0413\u0435\u043D\u0435\u0440\u0430\u043B \u0413\u0443\u0440\u043A\u043E \u0435 \u0435\u0434\u043D\u0430 \u043E\u0442 \u043D\u0430\u0439-\u043A\u0440\u0430\u0441\u0438\u0432\u0438\u0442\u0435 \u0438 \u0435\u043C\u0431\u043B\u0435\u043C\u0430\u0442\u0438\u0447\u043D\u0438 \u0443\u043B\u0438\u0446\u0438 \u043D\u0430 \u0412\u0435\u043B\u0438\u043A\u043E \u0422\u044A\u0440\u043D\u043E\u0432\u043E. \u041A\u0430\u043B\u0434\u044A\u0440\u044A\u043C\u0435\u043D\u0430\u0442\u0430 \u0443\u043B\u0438\u0446\u0430 \u0441\u0435 \u0432\u0438\u0435 \u043F\u043E \u0441\u043A\u043B\u043E\u043D\u0430 \u043D\u0430\u0434 \u0440\u0435\u043A\u0430 \u042F\u043D\u0442\u0440\u0430, \u043E\u0431\u0433\u0440\u0430\u0434\u0435\u043D\u0430 \u043E\u0442 \u0430\u0432\u0442\u0435\u043D\u0442\u0438\u0447\u043D\u0438 \u0432\u044A\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0441\u043A\u0438 \u043A\u044A\u0449\u0438 \u0441 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043D\u0438 \u0435\u0440\u043A\u0435\u0440\u0438, \u0434\u044A\u0440\u0432\u0435\u043D\u0438 \u0447\u0430\u0440\u0434\u0430\u0446\u0438 \u0438 \u0446\u0432\u0435\u0442\u044F \u043F\u043E \u0444\u0430\u0441\u0430\u0434\u0438\u0442\u0435.",
      gurkoP2: "\u041E\u0442 \u0443\u043B\u0438\u0446\u0430\u0442\u0430 \u0441\u0435 \u043E\u0442\u043A\u0440\u0438\u0432\u0430\u0442 \u0437\u0430\u0445\u043B\u0430\u0441\u0432\u0430\u0449\u0438 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0438 \u0433\u043B\u0435\u0434\u043A\u0438 \u043A\u044A\u043C \u0440\u0435\u043A\u0430 \u042F\u043D\u0442\u0440\u0430, \u0441\u0442\u0430\u0440\u0438\u0442\u0435 \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0438 \u0438 \u0445\u044A\u043B\u043C\u043E\u0432\u0435\u0442\u0435 \u043D\u0430\u043E\u043A\u043E\u043B\u043E. \u0422\u043E\u0432\u0430 \u0435 \u043C\u044F\u0441\u0442\u043E\u0442\u043E, \u043A\u044A\u0434\u0435\u0442\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u044F\u0442\u0430 \u0438 \u043A\u0440\u0430\u0441\u043E\u0442\u0430\u0442\u0430 \u0441\u0435 \u043F\u0440\u0435\u043F\u043B\u0438\u0442\u0430\u0442 \u0432 \u0432\u0441\u044F\u043A\u0430 \u043A\u0440\u0430\u0447\u043A\u0430.",
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
        twinBed: "Two single beds",
        bathroom: "Private bathroom",
        ac: "Air conditioning",
        tv: "Smart TV with 250+ channels",
        wifi: "Free Wi-Fi",
        kitchen: "Kitchenette",
        coffee: "Espresso machine, coffee 2in1 & 3in1, tea",
        balcony: "Balcony with panoramic view",
        view: "Old town view",
        laundry: "Laundry room",
        microwave: "Microwave with grill",
        sofa: "Sofa bed",
        dining: "Dining area",
        floor: "Floor",
      },
      room1: "Room 101 \u2013 Double Superior",
      room1desc: "Spacious first-floor room with a double bed, balcony, and panoramic view toward the Yantra River and the old town of Veliko Tarnovo. Equipped with air conditioning, Smart TV with 250+ channels, espresso machine, and private bathroom.",
      room1floor: "1st floor",
      room2: "Family Suite 201 / Studio 301",
      room2desc: "Spacious second-floor apartment with a double bed, sofa bed, fully equipped kitchenette with microwave grill, dining area, and a balcony with panoramic views. Studio 301 on the third floor complements the space with a double bed, additional single bed, kitchenette, and Smart TV. Ideal for families or longer stays.",
      room2floor: "2nd & 3rd floor",
      room3: "Studio 302 \u2013 Triple Superior",
      room3desc: "Cozy third-floor studio with a double bed and an additional single bed behind a decorative curtain, fully equipped kitchenette with ceramic hob, microwave and fridge, dining area, and a balcony with panoramic views toward the old town and the Monument of Asenevtsi. Stylish bathroom with shower cabin and decorative tiles.",
      room3floor: "3rd floor",
    },
    amenities: {
      title: "Amenities",
      items: [
        "Free high-speed Wi-Fi",
        "Central location in the architectural reserve",
        "Smart TV with 250+ channels in every room",
        "Espresso machine, coffee 2in1/3in1 & tea",
        "Microwave with grill (select rooms)",
        "Laundry room with washer, dryer & iron",
        "Quiet and peaceful atmosphere",
        "Bed linen and extra pillows",
        "Suitable for couples and families",
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
        `Free parking near ${Q}Tihiyat Kat${QC} tavern`,
        "Do NOT enter Gen. Gurko Street by car \u2013 the street is narrow and steep",
        "Alternative streets: Hadji Dimitar and Nikolay Pavlovich",
        "Park nearby and walk 3\u20135 minutes to the house",
      ],
      note: "We recommend parking on one of the neighboring streets and walking to the house \u2013 it\u2019s about 3\u20135 minutes on foot.",
    },
    pdf: "Download self check-in instructions",
    location: {
      title: "In the heart of the old capital",
      desc: "The house is located on Gen. Gurko Street \u2013 in the heart of the architectural reserve of Veliko Tarnovo, among 200-year-old Revival houses with characteristic bay windows and wooden balconies. The cobblestone street winds along the slope above the Yantra River, revealing panoramic views toward the Monument of Asenevtsi and the old quarters.",
      desc2: "Nearby are the Archaeological Museum, Tsarevets Fortress, Arbanasi, as well as the narrowest street in Bulgaria. This is a place where history is felt with every step.",
      distances: [
        ["Tsarevets", "~1.5 km"],
        ["Archaeological Museum", "~700 m"],
        ["Church of the 40 Martyrs", "~1.4 km"],
        ["Asen Monument", "~900 m"],
        ["Narrowest street in Bulgaria", "~200 m"],
        ["Arbanasi", "~5 km"],
        ["City Center", "~500 m"],
        ["Bus Station", "~2 km"],
      ] as [string, string][],
    },
    views: {
      title: "Views & Atmosphere",
      subtitle: "The city that stays in your heart",
      desc: "From the panoramic views of the Yantra River to the evening lights of Tsarevets \u2013 every walk here is an experience.",
      gurkoTitle: "The Legendary General Gurko Street",
      gurkoP1: "General Gurko Street is one of the most beautiful and iconic streets of Veliko Tarnovo. The cobblestone road winds along the slope above the Yantra River, lined with authentic Revival houses featuring characteristic bay windows, wooden balconies, and flowers on the facades.",
      gurkoP2: "From the street, breathtaking panoramic views open up toward the Yantra River, the old quarters, and the surrounding hills. This is where history and beauty intertwine with every step.",
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
        twinBed: "Dou\u0103 paturi single",
        bathroom: "Baie privat\u0103",
        ac: "Aer condi\u021Bionat",
        tv: "Smart TV cu 250+ canale",
        wifi: "Wi-Fi gratuit",
        kitchen: "Chicinet\u0103",
        coffee: "Espressor, cafea 2\u00EEn1 & 3\u00EEn1, ceai",
        balcony: "Balcon cu vedere panoramic\u0103",
        view: "Vedere ora\u0219 vechi",
        laundry: "Sp\u0103l\u0103torie",
        microwave: "Cuptor cu microunde \u0219i grill",
        sofa: "Canapea extensibil\u0103",
        dining: "Zon\u0103 de luat masa",
        floor: "Etaj",
      },
      room1: "Camera 101 \u2013 Double Superior",
      room1desc: "Camer\u0103 spa\u021Bioas\u0103 la etajul 1, cu pat dublu, balcon \u0219i vedere panoramic\u0103 spre r\u00E2ul Yantra. Echipat\u0103 cu Smart TV, espressor \u0219i baie privat\u0103.",
      room1floor: "Etajul 1",
      room2: "Apartament familial 201 / Studio 301",
      room2desc: "Apartament spa\u021Bios la etajul 2, cu pat dublu, canapea extensibil\u0103, buc\u0103t\u0103rie complet echipat\u0103 cu cuptor cu microunde, zon\u0103 de luat masa \u0219i balcon panoramic. Studio 301 la etajul 3 completeaz\u0103 spa\u021Biul cu pat dublu, pat single suplimentar, chicinet\u0103 \u0219i Smart TV. Ideal pentru familii sau sejururi mai lungi.",
      room2floor: "Etajul 2 \u0219i 3",
      room3: "Studio 302 \u2013 Triple Superior",
      room3desc: "Studio confortabil la etajul 3, cu pat dublu \u0219i pat single suplimentar \u00EEn spatele unei perdele decorative, buc\u0103t\u0103rie complet echipat\u0103 cu plac\u0103 ceramic\u0103, cuptor cu microunde \u0219i frigider, zon\u0103 de luat masa \u0219i balcon cu vedere panoramic\u0103 spre ora\u0219ul vechi \u0219i Monumentul Asen. Baie elegant\u0103 cu cabin\u0103 de du\u0219 \u0219i pl\u0103ci decorative.",
      room3floor: "Etajul 3",
    },
    amenities: {
      title: "Facilit\u0103\u021Bi",
      items: [
        "Wi-Fi gratuit de mare vitez\u0103",
        "Loca\u021Bie central\u0103 \u00EEn rezerva\u021Bia arhitectural\u0103",
        "Smart TV cu 250+ canale \u00EEn fiecare camer\u0103",
        "Espressor, cafea 2\u00EEn1/3\u00EEn1 \u0219i ceai",
        "Cuptor cu microunde \u0219i grill (camere selectate)",
        "Sp\u0103l\u0103torie cu ma\u0219in\u0103, usc\u0103tor \u0219i fier de c\u0103lcat",
        "Atmosfer\u0103 lini\u0219tit\u0103 \u0219i pa\u0219nic\u0103",
        "Lenjerie de pat \u0219i perne suplimentare",
        "Potrivit pentru cupluri \u0219i familii",
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
        `Parcare gratuit\u0103 l\u00E2ng\u0103 taverna ${Q}Tihiyat Kat${QC}`,
        "NU intra\u021Bi cu ma\u0219ina pe strada Gen. Gurko \u2013 este \u00EEngust\u0103 \u0219i abrupt\u0103",
        "Str\u0103zi alternative: Hadji Dimitar \u0219i Nikolay Pavlovich",
        "Parca\u021Bi \u00EEn apropiere \u0219i merge\u021Bi pe jos 3\u20135 minute",
      ],
      note: "V\u0103 recomand\u0103m s\u0103 parca\u021Bi pe una dintre str\u0103zile vecine \u0219i s\u0103 merge\u021Bi pe jos p\u00E2n\u0103 la cas\u0103 \u2013 dureaz\u0103 circa 3\u20135 minute.",
    },
    pdf: "Descarc\u0103 instruc\u021Biunile de self check-in",
    location: {
      title: "\u00CEn inima vechii capitale",
      desc: "Casa este situat\u0103 pe strada Gen. Gurko \u2013 \u00EEn inima rezerva\u021Biei arhitecturale din Veliko T\u00E2rnovo, printre case renascen\u0163iste de peste 200 de ani, cu balcoane din lemn caracteristice. Strada pavat\u0103 se \u00EEntinde de-a lungul versantului de deasupra r\u00E2ului Yantra, oferind vederi panoramice spre Monumentul Asen.",
      desc2: "\u00CEn apropiere se afl\u0103 Muzeul Arheologic, Cetatea Tsarevets, Arbanasi, precum \u0219i cea mai \u00EEngust\u0103 strad\u0103 din Bulgaria. Aici istoria se simte la fiecare pas.",
      distances: [
        ["Tsarevets", "~1.5 km"],
        ["Muzeul Arheologic", "~700 m"],
        ["Biserica celor 40 de mucenici", "~1.4 km"],
        ["Monumentul Asen", "~900 m"],
        ["Cea mai \u00EEngust\u0103 strad\u0103 din Bulgaria", "~200 m"],
        ["Arbanasi", "~5 km"],
        ["Centrul ora\u0219ului", "~500 m"],
        ["Autogara", "~2 km"],
      ] as [string, string][],
    },
    views: {
      title: "Priveliste si atmosfer\u0103",
      subtitle: "Ora\u0219ul care r\u0103m\u00E2ne \u00EEn inim\u0103",
      desc: "De la vederile panoramice asupra r\u00E2ului Yantra p\u00E2n\u0103 la luminile de sear\u0103 ale Tsarevets \u2013 fiecare plimbare aici este o experien\u021B\u0103.",
      gurkoTitle: "Legendara strad\u0103 General Gurko",
      gurkoP1: "Strada General Gurko este una dintre cele mai frumoase \u0219i emblematice str\u0103zi din Veliko T\u00E2rnovo. Drumul pavat se \u00EEntinde de-a lungul versantului de deasupra r\u00E2ului Yantra, \u00EEnconjurat de case autentice \u00EEn stil Renascen\u021Bist cu balcoane din lemn \u0219i flori pe fa\u021Bade.",
      gurkoP2: "De pe strad\u0103 se deschid vederi panoramice uimitoare spre r\u00E2ul Yantra, cartierele vechi \u0219i dealurile \u00EEmprejur\u0103toare. Aici istoria \u0219i frumuse\u021Bea se \u00EEmpletisc la fiecare pas.",
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
