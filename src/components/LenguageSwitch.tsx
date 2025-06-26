import { useTranslation } from 'react-i18next'
import { Switch } from '../components/ui/switch'

export function LanguageSwitch() {
  const { i18n } = useTranslation()
  const isEnglish = i18n.language === 'en'

  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-lg transition-opacity ${isEnglish ? 'opacity-50' : 'opacity-100'}`}
        aria-label="Español"
        role="img"
      >
        <img
          src="https://flagcdn.com/16x12/ar.png"
          width="24"
          height="18"
          alt="Español"
          className="rounded shadow-sm"
          loading='lazy'
        />
      </span>
      <Switch
        checked={isEnglish}
        onCheckedChange={(checked) => i18n.changeLanguage(checked ? 'en' : 'es')}
        aria-label="Switch language"
        className="hover:cursor-pointer"
        data-testid="language-switch"
      />
      <span
        className={`text-lg transition-opacity ${isEnglish ? 'opacity-100' : 'opacity-50'}`}
        aria-label="English"
        role="img"
      >
        <img
          src="https://flagcdn.com/24x18/gb.png"
          width="24"
          height="18"
          alt="English"
          className="rounded shadow-sm"
          loading='lazy'
        />
      </span>
    </div>
  )
}