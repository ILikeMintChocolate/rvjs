import { usePathname } from '@rvjs/core'
import { getLocale, t } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const IsJSSideNav = () => {
  const pathname = usePathname()
  const locale = getLocale()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.isJS.overview.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.isJS.overview.items.gettingStarted')}
            href={`/${locale()}/is-js/overview/gettingStarted`}
            isActive={pathname() === '/is-js/overview/gettingStarted'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.isJS.type.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.isJS.type.items.primitive')}
            href={`/${locale()}/is-js/type/primitive`}
            isActive={pathname() === '/is-js/type/primitive'}
          />
          <SideNavMenuItem
            text={t('sideNav.isJS.type.items.reference')}
            href={`/${locale()}/is-js/type/reference`}
            isActive={pathname() === '/is-js/type/reference'}
          />
          <SideNavMenuItem
            text={t('sideNav.isJS.type.items.composite')}
            href={`/${locale()}/is-js/type/composite`}
            isActive={pathname() === '/is-js/type/composite'}
          />
          <SideNavMenuItem
            text={t('sideNav.isJS.type.items.@rvjs/core')}
            href={`/${locale()}/is-js/type/rvjs-core`}
            isActive={pathname() === '/is-js/type/rvjs-core'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default IsJSSideNav
