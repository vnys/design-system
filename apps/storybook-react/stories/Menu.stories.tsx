import React, { useEffect } from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import {
  Menu,
  MenuProps,
  Typography,
  Button,
  Icon,
  TopBar,
} from '@equinor/eds-core-react'
import { Story, Meta } from '@storybook/react'

import { tokens } from '@equinor/eds-tokens'

import {
  folder,
  copy,
  paste,
  edit,
  delete_to_trash,
  settings,
  arrow_drop_right,
  more_vertical,
  pressure,
  bearing,
  cable,
} from '@equinor/eds-icons'

Icon.add({
  folder,
  copy,
  paste,
  edit,
  delete_to_trash,
  settings,
  arrow_drop_right,
  more_vertical,
  pressure,
  bearing,
  cable,
})

const { MenuItem, MenuSection } = Menu
const { Actions, Header } = TopBar
const { colors } = tokens

const Grid = styled.div`
  margin: 32px;
  display: grid;
  grid-gap: 32px;
  grid-auto-flow: column;
  width: auto;
  height: auto;
`

const Anchor = styled.div.attrs({ tabIndex: 0 })`
  background: lightgrey;
  padding: 14px;
  height: min-content;
  width: fit-content;
`

const onClick = (event: React.MouseEvent) => {
  action('clicked')(event)
  event.stopPropagation()
}

const bigMenuTemplate = (
  <>
    <MenuItem onClick={onClick}>
      <Typography
        color={colors.text.static_icons__tertiary.hex}
        group="navigation"
        variant="label"
      >
        <Icon name="folder" />
      </Typography>
      <Typography group="navigation" variant="menu_title">
        Open
      </Typography>
      <Typography
        color={colors.text.static_icons__tertiary.hex}
        group="navigation"
        variant="label"
      >
        CTRL+O
      </Typography>
    </MenuItem>
    <MenuItem active onClick={onClick}>
      <Typography
        color={colors.text.static_icons__tertiary.hex}
        group="navigation"
        variant="label"
      >
        <Icon name="copy" />
      </Typography>
      <Typography group="navigation" variant="menu_title">
        Copy
      </Typography>
      <Typography
        color={colors.text.static_icons__tertiary.hex}
        group="navigation"
        variant="label"
      >
        CTRL+C
      </Typography>
    </MenuItem>
    <MenuItem disabled onClick={onClick}>
      <Typography
        color={colors.text.static_icons__tertiary.hex}
        group="navigation"
        variant="label"
      >
        <Icon name="paste" />
      </Typography>
      <Typography group="navigation" variant="menu_title">
        Paste
      </Typography>
      <Typography
        color={colors.text.static_icons__tertiary.hex}
        group="navigation"
        variant="label"
      >
        CTRL+V
      </Typography>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <Typography
        color={colors.text.static_icons__tertiary.hex}
        group="navigation"
        variant="label"
      >
        <Icon name="edit" />
      </Typography>
      <Typography group="navigation" variant="menu_title">
        Rename
      </Typography>
      <Typography
        color={colors.text.static_icons__tertiary.hex}
        group="navigation"
        variant="label"
      >
        CTRL+R
      </Typography>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <Typography
        color={colors.text.static_icons__tertiary.hex}
        group="navigation"
        variant="label"
      >
        <Icon name="delete_to_trash" />
      </Typography>
      <Typography group="navigation" variant="menu_title">
        Delete
      </Typography>
      <Typography
        color={colors.text.static_icons__tertiary.hex}
        group="navigation"
        variant="label"
      >
        DEL
      </Typography>
    </MenuItem>
    <MenuSection title="Section">
      <MenuItem onClick={onClick}>
        <Typography
          color={colors.text.static_icons__tertiary.hex}
          group="navigation"
          variant="label"
        >
          <Icon name="settings" />
        </Typography>
        <Typography group="navigation" variant="menu_title">
          Settings
        </Typography>
      </MenuItem>
    </MenuSection>
  </>
)

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    viewMode: 'story',
  },
} as Meta

export const ButtonToggle: Story<MenuProps> = () => {
  const [state, setState] = React.useState<{
    buttonEl: HTMLButtonElement
    focus: 'first' | 'last'
  }>({
    focus: 'first',
    buttonEl: null,
  })

  const { buttonEl, focus } = state
  const isOpen = Boolean(buttonEl)

  const openMenu = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLButtonElement>,
    focus: 'first' | 'last',
  ) => {
    const target = e.target as HTMLButtonElement
    setState({ ...state, buttonEl: target, focus })
  }

  const closeMenu = () => {
    setState({ ...state, buttonEl: null, focus })
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const { key } = e
    e.preventDefault()
    switch (key) {
      case 'ArrowDown':
        isOpen ? closeMenu() : openMenu(e, 'first')
        break
      case 'ArrowUp':
        isOpen ? closeMenu() : openMenu(e, 'last')
        break
      case 'Escape':
        closeMenu()
        break
      default:
        break
    }
  }

  return (
    <Grid style={{ gridAutoFlow: 'row' }}>
      <Typography variant="h4">Click button to open Menu</Typography>
      <Button
        variant="ghost_icon"
        id="menuButton"
        aria-controls="menu-on-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={(e) => (isOpen ? closeMenu() : openMenu(e, null))}
        onKeyDown={onKeyPress}
      >
        Menu
      </Button>
      <Menu
        id="menu-on-button"
        aria-labelledby="menuButton"
        open={isOpen}
        anchorEl={buttonEl}
        onClose={closeMenu}
        focus={focus}
      >
        {bigMenuTemplate}
      </Menu>
    </Grid>
  )
}

export const InTopbar: Story<MenuProps> = () => {
  const [state, setState] = React.useState<{
    buttonEl: HTMLButtonElement
    focus: 'first' | 'last'
  }>({
    focus: 'first',
    buttonEl: null,
  })

  const { focus, buttonEl } = state
  const isOpen = Boolean(buttonEl)

  const openMenu = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    const target = e.target as HTMLButtonElement
    setState({ ...state, buttonEl: target })
  }

  const closeMenu = () => setState({ ...state, buttonEl: null })

  const onKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const { key } = e
    switch (key) {
      case 'ArrowDown':
        isOpen ? closeMenu() : openMenu(e)
        break
      case 'ArrowUp':
        isOpen ? closeMenu() : openMenu(e)
        break
      case 'Escape':
        closeMenu()
        break
      default:
        break
    }
  }

  return (
    <Grid style={{ margin: 0 }}>
      <TopBar>
        <Header>Menu in Topbar</Header>
        <Actions>
          <Button
            variant="ghost_icon"
            id="menuButton"
            aria-controls="menu-on-button"
            aria-haspopup="true"
            aria-expanded={Boolean(buttonEl)}
            onClick={(e) => (isOpen ? closeMenu() : openMenu(e))}
            onKeyDown={onKeyPress}
          >
            <Icon name="more_vertical" title="more"></Icon>
          </Button>
          <Menu
            id="menu-on-button"
            aria-labelledby="menuButton"
            focus={focus}
            open={Boolean(buttonEl)}
            anchorEl={buttonEl}
            onClose={closeMenu}
          >
            {bigMenuTemplate}
          </Menu>
        </Actions>
      </TopBar>
    </Grid>
  )
}

export const Examples: Story<MenuProps> = () => {
  const [state, setState] = React.useState<{
    one: HTMLDivElement
    two: HTMLDivElement
    three: HTMLDivElement
    four: HTMLDivElement
  }>({
    one: null,
    two: null,
    three: null,
    four: null,
  })

  const oneRef = React.useRef<HTMLDivElement>(null)
  const twoRef = React.useRef<HTMLDivElement>(null)
  const threeRef = React.useRef<HTMLDivElement>(null)
  const fourRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    setState({
      one: oneRef.current,
      two: twoRef.current,
      three: threeRef.current,
      four: fourRef.current,
    })
  }, [state.one])

  const { one, two, three, four } = state

  return (
    <Grid>
      <Anchor
        id="anchor-iconbuttons"
        aria-controls="menu-iconbuttons"
        aria-haspopup="true"
        ref={oneRef}
      >
        Icon Buttons
      </Anchor>
      <Menu id="menu-iconbuttons" open anchorEl={one}>
        <Button variant="ghost_icon">
          <Icon name="save" title="save"></Icon>
        </Button>
        <Button variant="ghost_icon">
          <Icon name="folder" title="folder"></Icon>
        </Button>
        <Button variant="ghost_icon">
          <Icon name="edit" title="edit"></Icon>
        </Button>
        <Button variant="ghost_icon">
          <Icon name="settings" title="settings"></Icon>
        </Button>
      </Menu>
      <Anchor
        id="anchor-plaintext"
        aria-controls="menu-plaintext"
        aria-haspopup="true"
        ref={twoRef}
      >
        Text
      </Anchor>
      <Menu id="menu-plaintext" open anchorEl={two}>
        <MenuItem>Pressure </MenuItem>
        <MenuItem>Bearing</MenuItem>
        <MenuItem>Cable</MenuItem>
      </Menu>
      <Anchor
        id="anchor-textIcon"
        aria-controls="menu-textIcon"
        aria-haspopup="true"
        ref={threeRef}
      >
        Text with icons
      </Anchor>
      <Menu id="menu-textIcon" open anchorEl={three}>
        <MenuItem>
          <Typography group="navigation" variant="label">
            <Icon name="pressure" />
          </Typography>
          Pressure
        </MenuItem>
        <MenuItem>
          <Typography group="navigation" variant="label">
            <Icon name="bearing" />
          </Typography>
          Bearing
        </MenuItem>
        <MenuItem>
          <Typography group="navigation" variant="label">
            <Icon name="cable" />
          </Typography>
          Cable
        </MenuItem>
      </Menu>

      <Anchor
        id="anchor-bigMenu"
        aria-controls="menu-bigMenu"
        aria-haspopup="true"
        ref={fourRef}
      >
        Complex
      </Anchor>
      <Menu id="menu-bigMenu" open anchorEl={four}>
        {bigMenuTemplate}
      </Menu>
    </Grid>
  )
}
