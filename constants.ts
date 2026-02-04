import { Breed, QuizQuestion } from './types';

export const BREEDS: Breed[] = [
  {
    id: 'ragdoll',
    name: '布偶猫',
    description: '温柔的巨人',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSLd2N3LwnY5SooaDll3TRwDCyBrXo7JpsRLKtQpJE2VtzDdt-kiW9B5JeASMYX1WxPGUNEE-H-MMnzPG_177Nxx04KzEBvTGx4WQ5YDAnCPDg5ksEo_-JNDu6Q2L0CfnWQnCyiXFnsDVNL-eKcaARwRKRg4NINSDPOhvqE4o-KQ0ZGfdnk950S83PxUJfgwByiuLXtyo_rQtcAe299rdAfOkRTFlex3aaiUJj6lUYX_95xNnZDcyWzhxvjWYIvGYo3RZXTzR80hs',
    rating: 4.9,
    tags: ['冷静', '友善'],
    origin: '美国'
  },
  {
    id: 'mainecoon',
    name: '缅因猫',
    description: '体型巨大且充满爱心',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsyH2LDWDbSYVot77OMJicrf4CUBeyW6A6vl94S3gfll3xxmdgcFekBbyq30Vy2qABy1THkhEtFd6xpUEXD-_hQ3fcOm1n35yEKfD2rSpiGMyeFfugo0NLrVHEi_OTAerXN7jtCq0vn-xLCR_r4gHX6gdI7YARjr9NqgZsatMW1KrETe_Kt34QPRY9NEUQMm6Q3oexI0T-cvqgz3pZevKhBIG_yBFBEK4QHMysiGlIGVMpQ_Klb8o4B5cZ3wKiJNxwkRpy9X5W2Yc',
    rating: 4.8,
    tags: ['巨大', '毛茸茸'],
    origin: '美国'
  },
  {
    id: 'siamese',
    name: '暹罗猫',
    description: '善于交际且爱叫',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCmQFiccWhuvTFGSy9ufVeKb-nZHt7WWx8wTGbeg0d7SCqyXD_gjFFVbJ5OMLgz6kGS6bKVaOhCk9d4MjwRPNfrISJ0Yzl4AYWq8zgV4aHmhMmTSHtRIJ9SsYtFZuF5iDQtjqOBK1eyBDYQEzifoaxnR3qmB57abTebWOgWcNwUWR1EW-pR-P75MJfAF0s2O6L-uIDRA23GlC8e_vA2DkhUdLYnWDVdcOpGSxDUkAYxkKRwraM8MD4Hw_oZMvvkYrRC_5cN_pi9JM',
    rating: 4.7,
    tags: ['聪明', '活泼'],
    origin: '泰国'
  },
  {
    id: 'scottishfold',
    name: '苏格兰折耳猫',
    description: '性情温和',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIxlEP9VPWcZ0_mhWZtavCF0iPh0tKmrmHyE3oCS0H4r6gG9cPbHQsvN5YIxDUuYbp-P5OKmcBODUdGLbQhCEbEg5uHHhn10FS_j-OEs5rjAfbPa667BWJ-dUnFU6QXkJRTGozGfWBJGNYaQBa1GoL8Uf-sDrx9e5l9j1GdeDpAyJEOwjA_MdZWThJilPmDycZ_Gpy_3GdSgeOc8US17SGbR_gcp0cY0rVO2RS3jeRVGqXjxwHY71IlYIq5GOorBJ-JF5juGLTBBY',
    rating: 4.9,
    tags: ['忠诚', '安静'],
    origin: '苏格兰'
  },
    {
    id: 'bengal',
    name: '孟加拉豹猫',
    description: '野性外观，精力充沛',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6AYrhNPdRvfLfClLtDk3qxjlzbY88reQkSLPU6IecVbQCQfG2dzhLfDxv9bahuOh-2YKu0N_Hs-Cvq0T2NFRYNxKRbqX8Eo0cMuD-ANV3OnCKgMgiCuZtFDfGdJKdpCOZhuVuycMrKnt0Dw0WcrhAcVpbuq_MprrlyIYNSou1ey1DEzXtPIWrJDGjKZXIABejB94brW59h4BytHZOOn13fJxSbOzv2F5KcOOKnmzJMcPXmCkfidCoQ8XzI9fDNxvsssos7PGRoao',
    rating: 4.6,
    tags: ['野性', '顽皮'],
    origin: '美国'
  },
  {
    id: 'sphynx',
    name: '斯芬克斯猫',
    description: '独特的无毛品种',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUL7G73MkPVgHS9jeIzil0sg-bBHIA2MePi9c0oD2zct8dq_GEhXxEZEH9lZV4Reanz26gI_uYv9-H3JyJ9EAlbWHrO1x2kzJFLiPVBe2ZuhdFfGsCgEP0ImuVjftJZChUzG481kislk_aR9Ls9uYFJt5_WD1BPue9cnLD3-YFPLDGEoDp661LUJyDLSOWV3YMnVHOO4sHB7mal2HK2OUwjyb7lawzIUh4t6IZkdWuBL2quCgAxIMHoYbsHz6u5pG49eKKNkefiIk',
    rating: 4.5,
    tags: ['无毛', '粘人'],
    origin: '加拿大'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 3,
    category: '生活方式',
    question: '你的居住环境如何？',
    description: '猫咪对空间的需求各不相同，告诉我们你的住所情况，帮你找到最适合的室友。',
    options: [
      { value: 'apartment', label: '市中心公寓', subLabel: '紧凑温馨，适合安静的猫咪', icon: 'apartment' },
      { value: 'house', label: '带花园的住宅', subLabel: '宽敞空间，适合活泼好动的猫咪', icon: 'deck' },
      { value: 'shared', label: '合租单间', subLabel: '有限空间，适合独立性强的猫咪', icon: 'bedroom_parent' },
    ]
  }
];
