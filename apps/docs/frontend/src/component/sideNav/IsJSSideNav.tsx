import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNavMenu, SideNavMenuItem } from '@rvjs/ui'
import { isPathIncluded } from '@util/path.ts'

interface IsJSSideNavProps {
  depth: number
}

const IsJSSideNav = (props: IsJSSideNavProps) => {
  const pathname = usePathname()
  const { language } = useLocale()

  return (
    <>
      <SideNavMenu
        menuName={t('sideNav.isJS.overview.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text={t('sideNav.isJS.overview.items.gettingStarted')}
          href={`#/${language()}/is-js/overview/gettingStarted`}
          isActive={isPathIncluded(
            '/is-js/overview/gettingStarted',
            pathname(),
          )}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.isJS.type.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text={t('sideNav.isJS.type.items.primitive')}
          href={`#/${language()}/is-js/type/primitive`}
          isActive={isPathIncluded('/is-js/type/primitive', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text={t('sideNav.isJS.type.items.reference')}
          href={`#/${language()}/is-js/type/reference`}
          isActive={isPathIncluded('/is-js/type/reference', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text={t('sideNav.isJS.type.items.composite')}
          href={`#/${language()}/is-js/type/composite`}
          isActive={isPathIncluded('/is-js/type/composite', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text={t('sideNav.isJS.type.items.@rvjs/core')}
          href={`#/${language()}/is-js/type/rvjs-core`}
          isActive={isPathIncluded('/is-js/type/rvjs-core', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
    </>
  )
}

export default IsJSSideNav
