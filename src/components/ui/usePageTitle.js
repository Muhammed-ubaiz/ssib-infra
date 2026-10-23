import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | SSIB Infra Builders Pvt Ltd` : 'SSIB Infra Builders Pvt Ltd — Trusted name in construction'
  }, [title])
}
