import { BUILDERCOMPONY, BUILDERMANAGER, CEMENTTRUCK } from "../assets"

const exportNavbarNavigate = [
    {
        id: 1,
        label: 'Главная',
        url: '#Home',
    },
    {
        id: 2,
        label: 'О нас',
        url: '#About_Us',
    },
    {
        id: 3,
        label: 'Продукция',
        url: '#Products',
    },
    {
        id: 4,
        label: 'Процесс',
        url: '#Process',
    },
    {
        id: 5,
        label: 'Надёжность',
        url: '#Reliability',
    },
    {
        id: 6,
        label: 'Клиенты',
        url: '#Клиенты',
    },
    {
        id: 7,
        label: 'Связаться с нами',
        url: '#Contact',
    },
]


const faq_Info = [
    {
        id: 1,
        img: CEMENTTRUCK,
        alt: "CEMENTTRUCK",
        title: 'Отслеживайте доставку по всей цепочке поставок',
        description: "От поставщика до субподрядчика - вы всегда знаете, где находятся ваши материалы, благодаря чему обычные отходы уходят в прошлое и сокращаются несчастные случаи на месте."
    },
    {
        id: 2,
        img: BUILDERMANAGER,
        alt: "BUILDERMANAGER",
        title: 'Оптимизируйте и контролируйте свое прибытие на место',
        description: "Транспортные средства доставки прибывают в фиксированные промежутки времени в заранее назначенные отсеки, где разгрузочное оборудование готово и ждет их.",
    },
    {
        id: 3,
        img: BUILDERCOMPONY,
        alt:"BUILDERCOMPONY",
        title: 'Возьмите под контроль данные в режиме реального времени',
        description: "Интеллектуальная отчетность дает вам возможность принимать решения в зависимости от того, как обстоят дела в данный момент. Больше никаких ручных отчетов по заливке бетона или ежемесячной проверки 10.000 накладных со счетами, все это доступно онлайн без каких-либо усилий.",
    },
]



export const exportModul = { exportNavbarNavigate, faq_Info }