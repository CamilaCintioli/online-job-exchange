interface I18nHelpers {
    t: (id: string) => string
}

export default function useI18n(): I18nHelpers{
    return { t: (id)=>id }
}