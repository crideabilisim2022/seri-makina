"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Play, X } from "lucide-react";

// --- Product Media ---
const productsMedia = {
  sloter: {
    name: "Sloter & İnline Makinası",
    images: Array.from({ length: 20 }, (_, i) => `/img/slotter/${i + 1}.jpg`),
    prints: Array.from(
      { length: 10 },
      (_, i) => `/img/slotter/baski/${i + 1}.jpg`
    ),
    videos: Array.from({ length: 8 }, (_, i) => ({
      src: `/videos/${i + 1}.mp4`,
      thumbnail: `/img/videos/${i + 1}.jpg`,
    })),
  },
  "jumbo-sloter": {
    name: "Jumbo Sloter Makinası",
    images: [
      "/img/jumbo-sloter/1.jpg",
      "/img/jumbo-sloter/2.jpg",
      "/img/jumbo-sloter/3.jpg",
      "/img/jumbo-sloter/5.jpeg",
    ],
    prints: [
      "/img/jumbo-sloter/baski/1.jpg",
      "/img/jumbo-sloter/baski/2.jpg",
      "/img/jumbo-sloter/baski/3.jpg",
      "/img/jumbo-sloter/baski/4.jpg",
      "/img/jumbo-sloter/baski/5.jpg",
      "/img/jumbo-sloter/baski/6.jpg",
      "/img/jumbo-sloter/baski/7.jpg",
      "/img/jumbo-sloter/baski/8.jpg",
      "/img/jumbo-sloter/baski/9.jpg",
      "/img/jumbo-sloter/baski/10.jpg",
    ],
    videos: [
      {
        src: "/videos/8.mp4",
        thumbnail: "/img/jumbo-sloter/video1.jpg",
      },
      {
        src: "/videos/9.mp4",
        thumbnail: "/img/jumbo-sloter/video2.jpg",
      },
    ],
  },

  "mini-inline": {
    name: "Mini İnline Makinası",
    images: ["/img/mini-inline/1.jpg", "/img/mini-inline/2.jpg"],
    prints: [
      "/img/mini-inline/baski/1.jpg",
      "/img/mini-inline/baski/2.jpg",
      "/img/mini-inline/baski/3.jpg",
      "/img/mini-inline/baski/4.jpg",
      "/img/mini-inline/baski/5.jpg",
      "/img/mini-inline/baski/6.jpg",
      "/img/mini-inline/baski/7.jpg",
      "/img/mini-inline/baski/8.jpg",
      "/img/mini-inline/baski/9.jpg",
      "/img/mini-inline/baski/10.jpg",
    ],
    videos: [
      {
        src: "/videos/mini-inline/1.mp4",
        thumbnail: "/img/mini-inline/video1.jpg",
      },
    ],
  },
  "box-folding": {
    tr: {
      name: "Kutu Katlama ve Yapıştırma Makinası",
      description:
        "Yüksek hızlı, elektronik sistemli kutu katlama ve yapıştırma makinası.",
      propertyLabels: {
        machineModel: "MAKİNA MODELİ",
        maxCardboardWidth: "Maksimum Mukavva Genişliği",
        minCardboardWidth: "Minimum Mukavva Genişliği",
        capacity: "Kapasite (m/dk)",
        gluingSystem: "Yapıştırma Sistemi",
        countingAndSeparationSystem: "Sayma ve Ayırma Sistemi",
      },
    },
    en: {
      name: "Box Folding and Gluing Machine",
      description:
        "High-speed box folding and gluing machine with electronic counting and separation system.",
      propertyLabels: {
        machineModel: "MACHINE MODEL",
        maxCardboardWidth: "Maximum Cardboard Width",
        minCardboardWidth: "Minimum Cardboard Width",
        capacity: "Capacity (m/min)",
        gluingSystem: "Gluing System",
        countingAndSeparationSystem: "Counting and Separation System",
      },
    },
    specs: [
      {
        property: "machineModel",
        values: ["Kutu Katlama ve Yapıştırma Makinası"],
      },
      { property: "maxCardboardWidth", values: ["1300×2800 mm"] },
      { property: "minCardboardWidth", values: ["300×600 mm"] },
      { property: "capacity", values: ["120 m/dk"] },
      {
        property: "gluingSystem",
        values: ["Alt üst kulak yapıştırma sistemi"],
      },
      {
        property: "countingAndSeparationSystem",
        values: ["Elektronik Sistem ile"],
      },
    ],
    images: ["/img/kutu-katlama/1.jpg", "/img/kutu-katlama/2.jpg"],
    prints: [],
    videos: [
      {
        src: "/videos/12.mp4",
        thumbnail: "/img/kutu-katlama/video1.jpg",
      },
    ],
  },
  grooving: {
    name: "Jumbo Sloter Makinası",
    images: ["/img/rill-cizgi-mak/1.jpg", "/img/rill-cizgi-mak/2.jpg"],
    prints: [],
    videos: [
      {
        src: "/videos/13.mp4",
        thumbnail: "/img/videos/video2.jpg",
      },
    ],
  },
  "manual-stitching": {
    name: "KS 1300 Yarı Otomatik Dikiş Makinası",
    images: ["/img/manuel-dikis/1.jpg", "/img/manuel-dikis/2.png"],
    prints: [],
    videos: [],
  },
  "channel-opening": {
    name: "MS SEMI OTOMATİK YIKAMA MAKİNASI",
    images: ["/img/kanal-acma/1.jpg"],
    prints: [],
    videos: [],
  },
  cutting: {
    name: "Kesim Makinası (Vargel)",
    images: ["/img/cutting/1.jpg", "img/cutting/2.jpg"],
    prints: [],
    videos: [
      {
        src: "/videos/14.mp4",
        thumbnail: "/img/videos/video2.jpg",
      },
    ],
  },
};

// --- Product Specs with TR/EN property labels ---
const productSpecs = {
  sloter: {
    tr: {
      name: "Sloter & İnline Makinası",
      description:
        "Yüksek hızlı ve hassas kesim için tasarlanmış tam otomatik sloter makinası. Oluklu mukavva üretiminde mükemmel performans sunar.",
      propertyLabels: {
        machineModel: "MAKİNA MODELİ",
        serialWork: "Seri Çalışma (mm)",
        jumpWork: "Atlamalı Çalışma (mm)",
        minCardboardWidth: "Minimum Karton Genişliği (mm)",
        maxPrintArea: "Maksimum Baskı Alanı (mm)",
        channelWidth: "Kanal Genişliği (mm)",
        clicheThickness: "Klişe Kalınlığı (mm)",
        maxCardboardThickness: "Maksimum Karton Kalınlığı (mm)",
        minCardboardThickness: "Minimum Karton Kalınlığı (mm)",
        capacity: "Kapasite (adet/saat)",
        maxRotaryCutArea: "Maksimum Rotary Kesim Alanı (mm)",
        feederFanMotorPower: "Besleyici Fan Motor Gücü (kw)",
        minKnifeCombination: "Minimum Bıçak Birleştirme (mm)",
        cutterRubberThickness: "Kesici Lastik Kalınlığı (mm)",
        printRollerDiameter: "Baskı Merdane Çapı (mm)",
        clichePrintRollerDiameter: "Klişeli Baskı Merdane Çapı (mm)",
        rotaryDieRollerDiameter: "Rotary Kalıp Merdanesi Çapı (mm)",
        rotaryRubberRollerDiameter: "Rotary Lastik Merdanesi Çapı (mm)",
        mainMotorPower: "Ana Motor Gücü (kw)",
      },
    },
    en: {
      name: "Slotter & Inline Machine",
      description:
        "Fully automatic slotter machine designed for high-speed and precise cutting. Excellent performance in corrugated cardboard production.",
      propertyLabels: {
        machineModel: "MACHINE MODEL",
        serialWork: "Serial Work (mm)",
        jumpWork: "Jump Work (mm)",
        minCardboardWidth: "Minimum Cardboard Width (mm)",
        maxPrintArea: "Maximum Print Area (mm)",
        channelWidth: "Channel Width (mm)",
        clicheThickness: "Cliche Thickness (mm)",
        maxCardboardThickness: "Maximum Cardboard Thickness (mm)",
        minCardboardThickness: "Minimum Cardboard Thickness (mm)",
        capacity: "Capacity (pcs/hour)",
        maxRotaryCutArea: "Maximum Rotary Cut Area (mm)",
        feederFanMotorPower: "Feeder Fan Motor Power (kw)",
        minKnifeCombination: "Minimum Knife Combination (mm)",
        cutterRubberThickness: "Cutter Rubber Thickness (mm)",
        printRollerDiameter: "Print Roller Diameter (mm)",
        clichePrintRollerDiameter: "Cliche Print Roller Diameter (mm)",
        rotaryDieRollerDiameter: "Rotary Die Roller Diameter (mm)",
        rotaryRubberRollerDiameter: "Rotary Rubber Roller Diameter (mm)",
        mainMotorPower: "Main Motor Power (kw)",
      },
    },
    specs: [
      {
        property: "machineModel",
        values: [
          "SM/V 800",
          "SM/V 1020",
          "SM/V 1290",
          "SM/V 1337",
          "SM/V 1520",
        ],
      },
      {
        property: "serialWork",
        values: [
          "800×2200",
          "1020×2400",
          "1290×2600",
          "1337×2800",
          "1520×4000",
        ],
      },
      {
        property: "jumpWork",
        values: [
          "1140×2200",
          "1400×2400",
          "1550×2600",
          "1650×2800",
          "1770×4000",
        ],
      },
      {
        property: "minCardboardWidth",
        values: ["270×700", "300×700", "350×750", "400×750", "350×700"],
      },
      {
        property: "maxPrintArea",
        values: [
          "800×2000",
          "1020×2150",
          "1290×2350",
          "1337×2550",
          "1520×3750",
        ],
      },
      { property: "channelWidth", values: ["9", "9", "9", "9", "9"] },
      {
        property: "clicheThickness",
        values: ["3,9", "3,9", "3,9", "3,9", "3,94"],
      },
      {
        property: "maxCardboardThickness",
        values: ["10", "10", "10", "10", "10"],
      },
      {
        property: "minCardboardThickness",
        values: ["1,5", "1,5", "1,5", "1,5", "1,5"],
      },
      {
        property: "capacity",
        values: ["7500", "7000", "6000", "4000", "4000"],
      },
      {
        property: "maxRotaryCutArea",
        values: ["750×2100", "920×2300", "1240×2500", "1280×2700", "1475×3800"],
      },
      {
        property: "feederFanMotorPower",
        values: ["5,5", "5,5", "7,5", "7,5", "7,5"],
      },
      {
        property: "minKnifeCombination",
        values: ["130", "130", "130", "130", "130"],
      },
      {
        property: "cutterRubberThickness",
        values: ["10", "10", "10", "10", "10"],
      },
      {
        property: "printRollerDiameter",
        values: ["247", "318", "399", "418", "477"],
      },
      {
        property: "clichePrintRollerDiameter",
        values: ["255", "326", "407", "426", "485"],
      },
      {
        property: "rotaryDieRollerDiameter",
        values: ["210", "281", "360", "381", "440"],
      },
      {
        property: "rotaryRubberRollerDiameter",
        values: ["231", "295", "295", "401", "401"],
      },
      { property: "mainMotorPower", values: ["11", "11", "15", "15", "22"] },
    ],
  },
  "jumbo-sloter": {
    tr: {
      name: "Jumbo Sloter Makinası",
      description:
        "Büyük boy oluklu mukavva üretimleri için yüksek kapasiteli sloter makinası.",
      propertyLabels: {
        machineModel: "MAKİNA MODELİ",
        maxCardboardWidth: "Maksimum Karton Genişliği",
        serialOperation: "Seri Çalışma (mm)",
        skipOperation: "Atlamalı Çalışma (mm)",
        minCardboardWidth: "Minimum Karton Genişliği (mm)",
        maxPrintArea: "Maksimum Baskı Alanı (mm)",
        channelWidth: "Kanal Genişliği (mm)",
        clichéThickness: "Klişe Kalınlığı (mm)",
        maxCardboardThickness: "Maksimum Karton Kalınlığı (mm)",
        capacity: "Kapasite (saat başına)",
        maxRotaryCutArea: "Maksimum Rotary Kesim Alanı (mm)",
        cutterRubberThickness: "Kesici Lastik Kalınlığı (mm)",
        printRollerDiameter: "Baskı Merdane Çapı (mm)",
        clichéRollerDiameter: "Klişeli Baskı Merdane Çapı (mm)",
        rotaryDieRollerDiameter: "Rotary Kalıp Merdanesi Çapı (mm)",
        rotaryRubberRollerDiameter: "Rotary Lastik Merdanesi Çapı (mm)",
        mainMotorPower: "Ana Motor Gücü (kw)",
      },
    },
    en: {
      name: "Jumbo Sloter Machine",
      description:
        "High-capacity slotter machine designed for large-size corrugated cardboard production.",
      propertyLabels: {
        machineModel: "MACHINE MODEL",
        maxCardboardWidth: "Maximum Cardboard Width",
        serialOperation: "Serial Operation (mm)",
        skipOperation: "Skip Operation (mm)",
        minCardboardWidth: "Minimum Cardboard Width (mm)",
        maxPrintArea: "Maximum Print Area (mm)",
        channelWidth: "Channel Width (mm)",
        clichéThickness: "Cliché Thickness (mm)",
        maxCardboardThickness: "Maximum Cardboard Thickness (mm)",
        capacity: "Capacity (per hour)",
        maxRotaryCutArea: "Maximum Rotary Cut Area (mm)",
        cutterRubberThickness: "Cutter Rubber Thickness (mm)",
        printRollerDiameter: "Print Roller Diameter (mm)",
        clichéRollerDiameter: "Cliché Roller Diameter (mm)",
        rotaryDieRollerDiameter: "Rotary Die Roller Diameter (mm)",
        rotaryRubberRollerDiameter: "Rotary Rubber Roller Diameter (mm)",
        mainMotorPower: "Main Motor Power (kw)",
      },
    },
    specs: [
      {
        property: "machineModel",
        values: ["SM/V 1670", "SM/V 1800", "SM/V 2350"],
      },
      {
        property: "serialOperation",
        values: ["1670×3500", "1800×4000", "2350×4000"],
      },
      {
        property: "skipOperation",
        values: ["2150×3500", "2050×4000", "-"],
      },
      {
        property: "minCardboardWidth",
        values: ["750×1000", "600×750", "750×1000"],
      },
      {
        property: "maxPrintArea",
        values: ["1670×3200", "1800×3600", "2350×3800"],
      },
      {
        property: "channelWidth",
        values: ["9", "9", "9"],
      },
      {
        property: "clichéThickness",
        values: ["3.9", "3.94", "3.9"],
      },
      {
        property: "maxCardboardThickness",
        values: ["10", "10", "10"],
      },
      {
        property: "capacity",
        values: ["2500", "2500", "2500"],
      },
      {
        property: "maxRotaryCutArea",
        values: ["1600×3200", "1475×3800", "2200×3800"],
      },
      {
        property: "cutterRubberThickness",
        values: ["10", "10", "10"],
      },
      {
        property: "printRollerDiameter",
        values: ["522", "572", "742"],
      },
      {
        property: "clichéRollerDiameter",
        values: ["530", "580", "750"],
      },
      {
        property: "rotaryDieRollerDiameter",
        values: ["485", "535", "705"],
      },
      {
        property: "rotaryRubberRollerDiameter",
        values: ["401", "401", "401"],
      },
      {
        property: "mainMotorPower",
        values: ["22", "22", "30"],
      },
    ],
  },

  "mini-inline": {
    tr: {
      name: "Mini İnline Makinası",
      description:
        "Yüksek hassasiyetli baskı ve kesim işlemleri için tasarlanmış profesyonel oluklu mukavva makinası.",
      propertyLabels: {
        machineModel: "MAKİNA MODELİ",
        maxCardboardWidth: "Maksimum Karton Genişliği",
        serialOperation: "Seri Çalışma (mm)",
        skipOperation: "Atlamalı Çalışma (mm)",
        minCardboardWidth: "Minimum Karton Genişliği (mm)",
        maxPrintingArea: "Maksimum Baskı Alanı (mm)",
        channelWidth: "Kanal Genişliği (mm)",
        clichéThickness: "Klişe Kalınlığı (mm)",
        maxCardboardThickness: "Maksimum Karton Kalınlığı (mm)",
        minCardboardThickness: "Minimum Karton Kalınlığı (mm)",
        capacity: "Kapasite (adet/saat)",
        feederFanMotorPower: "Besleyici Fan Motor Gücü (kw)",
        minKnifeJoin: "Minimum Bıçak Birleştirme (mm)",
        maxRotaryCuttingArea: "Maksimum Rotary Kesim Alanı (mm)",
        cuttingRubberThickness: "Kesici Lastik Kalınlığı (mm)",
        printingRollDiameter: "Baskı Merdane Çapı (mm)",
        clichéPrintingRollDiameter: "Klişeli Baskı Merdane Çapı (mm)",
        rotaryDieRollDiameter: "Rotary Kalıp Merdanesi Çapı (mm)",
        rotaryRubberRollDiameter: "Rotary Lastik Merdanesi Çapı (mm)",
        mainMotorPower: "Ana Motor Gücü (kw)",
      },
    },
    en: {
      name: "Mini Inline Machine",
      description:
        "High-precision corrugated cardboard machine designed for advanced printing and rotary die-cutting operations.",
      propertyLabels: {
        machineModel: "MACHINE MODEL",
        maxCardboardWidth: "Maximum Cardboard Width",
        serialOperation: "Serial Operation (mm)",
        skipOperation: "Skip Operation (mm)",
        minCardboardWidth: "Minimum Cardboard Width (mm)",
        maxPrintingArea: "Maximum Printing Area (mm)",
        channelWidth: "Channel Width (mm)",
        clichéThickness: "Cliché Thickness (mm)",
        maxCardboardThickness: "Maximum Cardboard Thickness (mm)",
        minCardboardThickness: "Minimum Cardboard Thickness (mm)",
        capacity: "Capacity (pcs/hour)",
        feederFanMotorPower: "Feeder Fan Motor Power (kw)",
        minKnifeJoin: "Minimum Knife Joint (mm)",
        maxRotaryCuttingArea: "Maximum Rotary Cutting Area (mm)",
        cuttingRubberThickness: "Cutting Rubber Thickness (mm)",
        printingRollDiameter: "Printing Roll Diameter (mm)",
        clichéPrintingRollDiameter: "Printing Roll Diameter with Cliché (mm)",
        rotaryDieRollDiameter: "Rotary Die Roll Diameter (mm)",
        rotaryRubberRollDiameter: "Rotary Rubber Roll Diameter (mm)",
        mainMotorPower: "Main Motor Power (kw)",
      },
    },
    specs: [
      { property: "machineModel", values: ["SM/V 630"] },
      { property: "maxCardboardWidth", values: ["630×2000"] },
      { property: "serialOperation", values: ["630×2000"] },
      { property: "skipOperation", values: ["720×2000"] },
      { property: "minCardboardWidth", values: ["180×600"] },
      { property: "maxPrintingArea", values: ["630×1750"] },
      { property: "channelWidth", values: ["9"] },
      { property: "clichéThickness", values: ["3.94"] },
      { property: "maxCardboardThickness", values: ["10"] },
      { property: "minCardboardThickness", values: ["1.5"] },
      { property: "capacity", values: ["12000"] },
      { property: "feederFanMotorPower", values: ["4"] },
      { property: "minKnifeJoin", values: ["100"] },
      { property: "maxRotaryCuttingArea", values: ["580×1900"] },
      { property: "cuttingRubberThickness", values: ["9"] },
      { property: "printingRollDiameter", values: ["195"] },
      { property: "clichéPrintingRollDiameter", values: ["203"] },
      { property: "rotaryDieRollDiameter", values: ["158"] },
      { property: "rotaryRubberRollDiameter", values: ["210"] },
      { property: "mainMotorPower", values: ["11/15"] },
    ],
  },

  "box-folding": {
    tr: {
      name: "Kutu Katlama ve Yapıştırma Makinası",
      description:
        "Otomatik kutu katlama ve yapıştırma işlemleri için yüksek hızlı makina.",
      propertyLabels: {
        maxCardboardWidth: "Maximum Mukavva Genişliği",
        minCardboardWidth: "Minimum Mukavva Genişliği",
        capacity: "Kapasitesi",
        gluingSystem: "Yapıştırma Sistemi",
        countingSystem: "Sayma ve Ayırma Sistemi",
      },
    },
    en: {
      name: "Box Folding and Gluing Machine",
      description:
        "High-speed machine for automatic box folding and gluing operations.",
      propertyLabels: {
        maxCardboardWidth: "Maximum Cardboard Width",
        minCardboardWidth: "Minimum Cardboard Width",
        capacity: "Capacity",
        gluingSystem: "Gluing System",
        countingSystem: "Counting and Separation System",
      },
    },
    specs: [
      { property: "maxCardboardWidth", values: ["1300×2800 mm"] },
      { property: "minCardboardWidth", values: ["300×600 mm"] },
      { property: "capacity", values: ["120 m/dk"] },
      {
        property: "gluingSystem",
        values: ["Alt üst kulak yapıştırma sistemi"],
      },
      { property: "countingSystem", values: ["Elektronik Sistem"] },
    ],
  },
  grooving: {
    tr: {
      name: "SS 2200 Yarı Otomatik Rill Makinası",
      description:
        "Yarı otomatik rill işlemleri için yüksek hassasiyetli makina.",
      propertyLabels: {
        machineModel: "MAKİNA MODELİ",

        machineWidth: "Makine Genişliği",
        combinationCount: "Kombinasyon Sayısı",
        axisCount: "Eksen Sayısı",
        powerMotor: "Güç Motoru",
        grooveDistance: "Ruse Mesafesi",
      },
    },
    en: {
      name: "SS 2200 Semi-Automatic Grooving Machine",
      description:
        "High-precision semi-automatic grooving machine for efficient operations.",
      propertyLabels: {
        machineModel: "MACHINE MODEL",

        machineWidth: "Machine Width",
        combinationCount: "Number of Combinations",
        axisCount: "Number of Axes",
        powerMotor: "Power Motor",
        grooveDistance: "Groove Distance",
      },
    },
    specs: [
      { property: "machineModel", values: ["TEKNİK ÖZELLİKLERİ"] },

      { property: "machineWidth", values: ["2200 / 2400 / 2600 / 2800 mm"] },
      { property: "combinationCount", values: ["2"] },
      { property: "axisCount", values: ["2"] },
      { property: "powerMotor", values: ["1,5 kw"] },
      { property: "grooveDistance", values: ["70 mm"] },
    ],
  },
  "manual-stitching": {
    tr: {
      name: "KS 1300 Yarı Otomatik Dikiş Makinası",
      description:
        "1300 mm dikiş çubuğu uzunluğuna sahip yarı otomatik dikiş makinası. Paket ve fraksiyonel kutuların dikiş işlemleri için idealdir.",
      propertyLabels: {
        machineModel: "MAKİNA MODELİ",
        stitchBarLength: "Dikiş Çubuğu Uzunluğu (mm)",
        capacity: "Kapasite (adet/saat)",
        stitchSizes: "Dikiş Ebatları",
        spareParts: "Yedek Parçalar",
        machineDimensions: "Makina Ebatları (m)",
      },
    },
    en: {
      name: "KS 1300 Semi-Automatic Stitching Machine",
      description:
        "Semi-automatic stitching machine with 1300 mm stitch bar length. Ideal for stitching packaging and fractional boxes.",
      propertyLabels: {
        machineModel: "MACHINE MODEL",
        stitchBarLength: "Stitch Bar Length (mm)",
        capacity: "Capacity (pcs/hour)",
        stitchSizes: "Stitch Sizes",
        spareParts: "Spare Parts",
        machineDimensions: "Machine Dimensions (m)",
      },
    },
    specs: [
      { property: "machineModel", values: ["KS 1300"] },
      { property: "stitchBarLength", values: ["1300 mm"] },
      { property: "capacity", values: ["500 - 1000 adet/saat"] },
      {
        property: "stitchSizes",
        values: ["Paketlerin ve fraksiyonel kutuların farklı ebatlarda dikimi"],
      },
      { property: "spareParts", values: ["Her türlü yedek parça mevcuttur."] },
      { property: "machineDimensions", values: ["0.65 x 1.80 m"] },
    ],
  },
  "channel-opening": {
    tr: {
      name: "MS Semi Otomatik Yıkama Makinası",
      description:
        "2200 mm ve 2700 mm maksimum mukavva boyutu seçenekleriyle yüksek kapasiteli yarı otomatik yıkama makinası.",
      propertyLabels: {
        maxCardboardSize: "Maksimum Mukavva Boyutu",
        channelDepth: "Kanal Derinliği",
        channelWidth: "Kanal Genişliği",
        mainPower: "Ana Güç",
        bladeClosureDistance: "Bıçak Gövdeleri Kapanış Mesafesi",
        blades: "Bıçaklar",
        capacity: "Kapasite",
      },
    },
    en: {
      name: "MS Semi-Automatic Washing Machine",
      description:
        "High-capacity semi-automatic washing machine with maximum cardboard sizes of 2200 mm and 2700 mm.",
      propertyLabels: {
        maxCardboardSize: "Maximum Cardboard Size",
        channelDepth: "Channel Depth",
        channelWidth: "Channel Width",
        mainPower: "Main Power",
        bladeClosureDistance: "Blade Body Closure Distance",
        blades: "Blades",
        capacity: "Capacity",
      },
    },
    specs: [
      { property: "maxCardboardSize", values: ["2200 mm", "2700 mm"] },
      { property: "channelDepth", values: ["370 mm", "500 mm"] },
      { property: "channelWidth", values: ["8 mm", "8 mm"] },
      { property: "mainPower", values: ["2,2 kw", "2,2 kw"] },
      { property: "bladeClosureDistance", values: ["150 mm", "150 mm"] },
      { property: "blades", values: ["SPK 2080", "SPK 2080"] },
      {
        property: "capacity",
        values: ["1500 adet / saat", "1500 adet / saat"],
      },
    ],
  },
  cutting: {
    tr: {
      name: "Kesim Makinası (Vargel)",
      description:
        "1300 x 1800 mm kesici boyutuna sahip, yarı otomatik stanz kesici makinası. Paketleme üretiminde idealdir.",
      propertyLabels: {
        cuttingSize: "Kesici Boyutu",
        mainPower: "Ana Güç",
        capacity: "Kapasite",
        height: "Yükseklik",
        length: "Uzunluk",
        width: "Genişlik",
      },
    },
    en: {
      name: "FS 1300 Semi-Automatic Die-Cutting Machine",
      description:
        "Semi-automatic die-cutting machine with cutting size of 1300 x 1800 mm. Ideal for packaging production.",
      propertyLabels: {
        cuttingSize: "Cutting Size",
        mainPower: "Main Power",
        capacity: "Capacity",
        height: "Height",
        length: "Length",
        width: "Width",
      },
    },
    specs: [
      { property: "cuttingSize", values: ["1300 x 1800 mm"] },
      { property: "mainPower", values: ["1,5 KW"] },
      { property: "capacity", values: ["1000 adet / saat"] },
      { property: "height", values: ["1200 mm"] },
      { property: "length", values: ["4000 mm"] },
      { property: "width", values: ["1850 mm"] },
    ],
  },
};

// --- Dil desteği ---
const translations = {
  tr: {
    machineImages: "Makina Resimleri",
    printImages: "Baskı Resimleri",
    machineVideos: "Makina Videoları",
    specifications: "Teknik Özellikler",
  },
  en: {
    machineImages: "Machine Images",
    printImages: "Print Images",
    machineVideos: "Machine Videos",
    specifications: "Technical Specifications",
  },
};

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState("tr");
  const [activeTab, setActiveTab] = useState("images");
  const [modalVideo, setModalVideo] = useState(null);

  const rawProduct = searchParams.get("product") || "sloter";
  const productKey = Object.keys(productsMedia).includes(
    rawProduct.toLowerCase()
  )
    ? rawProduct.toLowerCase()
    : "sloter";

  const media = productsMedia[productKey];
  const productData = productSpecs[productKey] || productSpecs["sloter"];
  const productInfo = productData[language] || productData.tr; // her durumda TR/EN çalışır
  const t = translations[language] || translations.tr;

  return (
    <div className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{productInfo.name}</h1>
          <p className="text-lg mb-8">{productInfo.description}</p>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border">
            {["images", "prints", "videos"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab
                    ? "border-b-2 border-accent text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {
                  t[
                    tab === "images"
                      ? "machineImages"
                      : tab === "prints"
                      ? "printImages"
                      : "machineVideos"
                  ]
                }
              </button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {activeTab === "images" &&
              media.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${media.name} ${i + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}

            {activeTab === "prints" &&
              media.prints.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Print ${i + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}

            {activeTab === "videos" &&
              media.videos.map((video, i) => (
                <div
                  key={i}
                  className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setModalVideo(video.src)}
                >
                  <img
                    src={video.thumbnail}
                    className="w-full h-full object-cover"
                    alt={`Video ${i + 1}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Play size={48} className="text-white/50" />
                  </div>
                </div>
              ))}
          </div>

          {/* Video Modal */}
          {modalVideo && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              onClick={(e) => {
                if (e.target === e.currentTarget) setModalVideo(null);
              }}
            >
              <div className="relative w-11/12 max-w-4xl bg-black rounded-lg shadow-lg p-4">
                <button
                  onClick={() => setModalVideo(null)}
                  className="absolute top-2 right-2 text-white hover:text-accent"
                >
                  <X size={28} />
                </button>
                <video
                  src={modalVideo}
                  controls
                  autoPlay
                  className="w-full max-h-[70vh] rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Teknik Özellikler Tablosu */}
          <div className="max-w-6xl mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">{t.specifications}</h2>
            <div className="overflow-x-auto bg-card rounded-lg shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-6 py-4 text-left font-semibold">
                      Özellik
                    </th>
                    {productData.specs[0].values.map((model, i) => (
                      <th
                        key={i}
                        className="px-6 py-4 text-center font-semibold"
                      >
                        {model}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {productData.specs.slice(1).map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-secondary/5" : ""}>
                      <td className="px-6 py-4 font-medium">
                        {productInfo.propertyLabels[spec.property]}
                      </td>
                      {spec.values.map((v, j) => (
                        <td key={j} className="px-6 py-4 text-center">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ProductDetail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailContent />
    </Suspense>
  );
}
