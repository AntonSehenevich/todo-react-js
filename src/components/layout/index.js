import PropTypes from 'prop-types'

import styles from './index.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

Layout.defaultProps = {
  children: null
}
