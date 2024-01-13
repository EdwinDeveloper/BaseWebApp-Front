import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
            <Image
              alt="Código QR"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQAAAACFI5MzAAABdUlEQVR4Xu2WwW7DMAxDBei3DOjXBfi3BHikshRJtp1m3uIGReN3sClTdG39New58RkveQnHS/5B0szXXOVrVfSLhkw86WU+VzpfVATveCusXcEXIako7iHVJJ3bmFqCZ/LkMhYlqwhNMc/xwzv7CAfnhuM5JwQkR0BjRg5jQfFbQyY+Ncws0Fh+r/VOwsXRwigmvrvBRAR2NxssKKWGikAnesqRSAVcQrLYvmMMSKVmEWHqUSjNCLNYiEhTuAMu6WhSEYjEFE6M7ujKagiPDgpxZn07dUEVpNi+qOuZSZe9bSVMV1gdQrmPIygUBPPWk5OpdDvTvYRFzD4+7KauSbGV9NKdSOhfppKIcM08OitOgyjILFxIaC18jf6XIiIHdcQeb1l4UUR4iVMp/AE/zssO9pLJDWAWhuzauorAIh1GuGvzXuvthD3F5Z2yhaT1IgBh+YfSjWSxcYOJPr5zXEIojhlBh0Dvwzv7yK/jJS/heMlu8gXq1o36ylrCxgAAAABJRU5ErkJggg=="
              className={styles.vercelLogo}
              width={400}
              height={400}
              priority
            />
      </div>
    </main>
  )
}
