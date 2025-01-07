import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'
import { isPathIncluded } from '@util/path.ts'

const IsJSSideNav = () => {
  const pathname = usePathname()
  const { language } = useLocale()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.isJS.overview.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.isJS.overview.items.gettingStarted')}
            href={`/${language()}/is-js/overview/gettingStarted`}
            isActive={isPathIncluded(
              '/is-js/overview/gettingStarted',
              pathname(),
            )}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.isJS.type.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.isJS.type.items.primitive')}
            href={`/${language()}/is-js/type/primitive`}
            isActive={isPathIncluded('/is-js/type/primitive', pathname())}
          />
          <SideNavMenuItem
            text={t('sideNav.isJS.type.items.reference')}
            href={`/${language()}/is-js/type/reference`}
            isActive={isPathIncluded('/is-js/type/reference', pathname())}
          />
          <SideNavMenuItem
            text={t('sideNav.isJS.type.items.composite')}
            href={`/${language()}/is-js/type/composite`}
            isActive={isPathIncluded('/is-js/type/composite', pathname())}
          />
          <SideNavMenuItem
            text={t('sideNav.isJS.type.items.@rvjs/core')}
            href={`/${language()}/is-js/type/rvjs-core`}
            isActive={isPathIncluded('/is-js/type/rvjs-core', pathname())}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default IsJSSideNav
