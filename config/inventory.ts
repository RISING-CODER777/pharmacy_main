import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  dosageforms: string[]
  medicationtypes: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  medicationType: any
  type: string
  medicationtype: string
  requires_prescription: boolean
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "14f823dc-d3df-4aa9-a5d5-bd7cac607ca7",
    sku: "ABV-100MG-INJ-BATCH001",
    name: "Avastin 100mg Injection",
    description: 'Avastin 100mg Injection is an anticancer medication. It is used in the treatment of cancer of colon and rectum, non-small cell lung cancer, kidney cancer, brain tumor, ovarian and cervical cancer. It helps to prevent the growth of new blood vessels that feed tumors and stops tumors from growing.',
    price: 248900,
    image:
      "",
    images: [
      
    ],
    dosageforms: ["injection"],
    categories: ["medicine"],
    medicationtypes: ["prescription"],
    currency: "INR",
  },
  {
    id: "b9a99f38-db03-4dff-82b9-6b1deb962d4a",
    sku: "ACT-40MG-INJ-BATCH001",
    name: "Actorise 40 Injection",
    description: 'Actorise 40 Injection is used in the treatment of anemia that may have occurred due to chronic kidney disease or chemotherapy. It works by stimulating the bone marrow to produce more red blood cells.',
    price: 248900,
    image:
      "",
    images: [
      
    ],
    dosageforms: ["injection"],
    categories: ["medicine"],
    medicationtypes: ["prescription"],
    currency: "INR",
  },
  {
    id: "0c01de8b-a2a4-4bf5-adaa-6c4b8ee094e2",
    sku: "BDP-125MG-CAP-BATCH001",
    name: "Bdpalbo 125mg Capsule",
    description: 'Bdpalbo 125mg Capsule is used to treat patients with certain types of breast cancer (estrogen receptor-positive, human epidermal growth factor receptor 2-negative) which have spread to other organs. It is given together with hormonal anticancer therapies.',
    price: 446400,
    image:
      "",
    images: [
      "",
    ],
    dosageforms: ["capsule"],
    categories: ["medicine"],
    medicationtypes: ["prescription"],
    currency: "INR",
  },
  {
  id: "02f23cd8-09c8-4478-a2a2-99b28460db73",
  sku: "VPRGT-75G",
  name: "Volini Pain Relief Gel Tube Of 75 G",
  description: "The 75g Volini Gel is a pain relief gel that comes in a squeeze tube for easy application on the problem areas of the skin. Volini works by making blood vessels open up near the skin, in the area where it is applied. This increases blood flow to the painful area, which relieves the pain. Volini cream and Volini spray also work similarly, the active ingredients like Methyl Salicylate and Menthol work to give quick pain relief for sprains and muscle aches.",
  price: 24500,
  image:
    "",
  images: [
    "",
  ],
  dosageforms: [""],
  categories: ["healthcare"],
  medicationtypes: ["otc"],
  currency: "INR",
},
{
id: "40ef40df-2a35-4638-b3e7-84dfec31149d",
  sku: "BD-1234-25MG-RED",
  name: "Benadryl (25mg)",
  description: "BENADRYL 25 MG SOFT GELATIN CAPSULE is an antihistaminic medication. It blocks the action of certain chemical messengers that are responsible for inflammation, congestion, itching, and other allergic reactions.",
  price: 10000,
  image:
    "",
  images: [
    "",
  ],
  dosageforms: ["medicine"],
  categories: ["capsule"],
  medicationtypes: ["otc"],
  currency: "INR",
},
{
  id: "62541355-1d4c-42f6-aff3-ecde9fb05711",
    sku: "COSRX-RC-0.1-20",
    name: "Cosrx Retinol 0.1 Cream (20ml)",
    description: "It helps renew and resuface the skin and leaves the face glowing with radiance. Key Benefits: Based on real results from consumers' self assessments, the Retinol 0.1% Cream helps reduce wrinkles, creases and fine lines while increasing the skin's elasticity, preventing acne, and fading scarring.",
    price: 205000,
    image:
      "",
    images: [
      "",
    ],
    dosageforms: [""],
    categories: ["healthcare"],
    medicationtypes: ["prescription"],
    currency: "INR",
  },
  {
    id: "9404a3be-7b47-41b5-a6e6-da476e4a7507",
      sku: "CNCSB-100ML",
      name: "Cofsils Naturals Cough Syrup Bottle 100 Ml",
      description: "Cofsils Syrup helps in suppressing cough. It also soothes the soreness in the throat and reduces throat pain. Those with chest congestion are also prescribed this cough syrup as it helps in relieving the problem. The best thing about this cough syrup is that it is prepared with herbal ingredients such as tulsi, banapsha and haldi to name a few. It is light yet effective. Cofsils Syrup is available over-the-counter.",
      price: 8200,
      image:
        "",
      images: [
        "",
      ],
      dosageforms: ["syrup"],
      categories: ["medicine"],
      medicationtypes: ["otc"],
      currency: "INR",
    },
    {
      id: "7c65ab4d-00c7-458f-8ac0-a12b56e4ab3d",
        sku: "CBC-012",
        name: "Complete Blood Count (CBC) Test Kit ",
        description: "A complete blood count (CBC) is a blood test. It's used to look at overall health and find a wide range of conditions, including anemia, infection and leukemia. A complete blood count test measures the following: Red blood cells, which carry oxygen."
        ,
        price: 335400,
        image:
          "",
        images: [
          "",
        ],
        dosageforms: [""],
        categories: ["labtests"],
        medicationtypes: ["prescription"],
        currency: "INR",
      },
      {
        id: "2462d878-95ef-4f9e-b867-1746528b4353",
          sku: " PTK-004",
          name: "Pregnancy Test Kit",
          description: "The Prega News Test Kit is a quick and simple way to confirm whether you are pregnant from the comfort of your home. For couples who are trying to conceive this Prega News Kit is a perfect tool to easily get confirmation of pregnancy. With a fast 5-minute time, the pregnancy test kit from Prega News lets you check quickly when you need to know the pregnancy status.",
          price: 6000,
          image:
            "",
          images: [
            "",
          ],
          dosageforms: [""],
          categories: ["labtests"],
          medicationtypes: ["otc"],
          currency: "INR",
        },
]
