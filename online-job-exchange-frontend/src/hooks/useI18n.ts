interface I18nHelpers {
    t: (id: string, fillers?: Record<string, string>) => string
}

export default function useI18n(): I18nHelpers{
    return { t: (id, fillers)=>id }
}