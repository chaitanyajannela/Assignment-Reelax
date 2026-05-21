import { useState } from 'react'

import SearchBar from '../common/SearchBar'
import Button from '../common/Button'
import useBreakpoint from '../../hooks/useBreakpoint'

import iconUpgradeSparkle from '../../assets/icon-upgrade-sparkle.svg'
import iconPlus from '../../assets/icon-plus.svg'
import iconMenu from '../../assets/icon-menu.svg'
import iconUser from '../../assets/icon-user.svg'

function ProfileButton({
  onMenuClick,
  menuExpanded,
  showMenuButton = true,
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-white px-1 py-1 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#EEF2FF]">
        <img
          src={iconUser}
          alt="User"
          className="h-full w-full object-cover"
        />
      </div>

      {showMenuButton && (
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          aria-expanded={menuExpanded}
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 active:bg-gray-200"
        >
          <img
            src={iconMenu}
            alt=""
            className="h-[20px] w-[20px]"
          />
        </button>
      )}
    </div>
  )
}

function UpgradeButton({ showLabels = true }) {
  return (
    <Button
      variant="upgrade"
      className="
        flex h-[42px] items-center gap-1
        rounded-xl
        px-3
        text-[15px] font-normal
        shadow-sm
      "
    >
      <img
        src={iconUpgradeSparkle}
        alt=""
        className="h-[30px] w-[30px] shrink-0"
      />

      {showLabels && (
        <span className="whitespace-nowrap tracking-[0.2px] text-white">
          Upgrade
        </span>
      )}
    </Button>
  )
}

function CampaignButton({ showLabels = true }) {
  return (
    <Button
      variant="campaign"
      className="
        flex h-[54px] items-center gap-3
        rounded-2xl
        px-7
        text-[15px] font-semibold
        shadow-sm
      "
    >
      <img
        src={iconPlus}
        alt=""
        className="h-[18px] w-[18px] shrink-0"
      />

      {showLabels ? (
        <span className="whitespace-nowrap tracking-[0.2px]">
          Create Campaign
        </span>
      ) : (
        <span className="sr-only">
          Create Campaign
        </span>
      )}
    </Button>
  )
}

function NavActions({
  showLabels = true,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <UpgradeButton showLabels={showLabels} />

      <CampaignButton showLabels={showLabels} />

      <ProfileButton />
    </div>
  )
}

export default function Header() {
  const { isCompactNav } = useBreakpoint()

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  return (
    <header className="w-full border-b border-border bg-nav shadow-sm">
      <div className="mx-auto flex min-h-[84px] w-full max-w-shell items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        
        <div className="flex-1 max-w-[480px]">
          <SearchBar />
        </div>

        <div className="hidden sm:flex">
          <NavActions
            showLabels={!isCompactNav}
          />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          
          <Button
            variant="upgrade"
            className="flex h-11 w-11 items-center justify-center rounded-2xl"
            aria-label="Upgrade"
          >
            <img
              src={iconUpgradeSparkle}
              alt=""
              className="h-[24px] w-[24px]"
            />
          </Button>

          <Button
            variant="campaign"
            className="flex h-11 w-11 items-center justify-center rounded-2xl"
            aria-label="Create Campaign"
          >
            <img
              src={iconPlus}
              alt=""
              className="h-[18px] w-[18px]"
            />
          </Button>

          <ProfileButton
            onMenuClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            menuExpanded={mobileMenuOpen}
          />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-white px-4 py-3 sm:hidden">
          <nav className="flex flex-col gap-2">
            
            <a
              href="#upgrade"
              className="
                rounded-xl px-4 py-3
                text-sm font-semibold
                text-heading
                transition
                hover:bg-gray-100
              "
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Upgrade Plan
            </a>

            <a
              href="#create"
              className="
                rounded-xl px-4 py-3
                text-sm font-semibold
                text-heading
                transition
                hover:bg-gray-100
              "
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Create Campaign
            </a>

          </nav>
        </div>
      )}
    </header>
  )
}