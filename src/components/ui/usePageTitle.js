import { useEffect } from 'react'

export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title
      ? `${title} | SSIB Infra Builders Pvt Ltd`
      : 'SSIB Infra Builders Pvt Ltd — A-Class Road & Civil Infrastructure Contractors Kerala'

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', description)
    }
  }, [title, description])
}
