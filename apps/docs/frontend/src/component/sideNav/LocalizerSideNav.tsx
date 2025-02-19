import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNavMenu, SideNavMenuItem } from '@rvjs/ui'
import { isPathIncluded } from '@util/path.ts'

interface LocalizerSideNavProps {
  depth: number
}

const LocalizerSideNav = (props: LocalizerSideNavProps) => {
  const pathname = usePathname()
  const { language } = useLocale()

  return (
    <>
      <SideNavMenu
        menuName={t('sideNav.localizer.overview.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text={t('sideNav.localizer.overview.items.gettingStarted')}
          href={`#/${language()}/localizer/overview/gettingStarted`}
          isActive={isPathIncluded(
            '/localizer/overview/gettingStarted',
            pathname(),
          )}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.localizer.hook.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text={t('sideNav.localizer.hook.items.useLocalizer')}
          href={`#/${language()}/localizer/hook/useLocalizer`}
          isActive={isPathIncluded('/localizer/hook/useLocalizer', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text={t('sideNav.localizer.hook.items.t')}
          href={`#/${language()}/localizer/hook/t`}
          isActive={isPathIncluded('/localizer/hook/t', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text={t('sideNav.localizer.hook.items.useLocale')}
          href={`#/${language()}/localizer/hook/useLocale`}
          isActive={isPathIncluded('/localizer/hook/useLocale', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text={t('sideNav.localizer.hook.items.setLocale')}
          href={`#/${language()}/localizer/hook/setLocale`}
          isActive={isPathIncluded('/localizer/hook/setLocale', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
    </>
  )
}

export default LocalizerSideNav
