interface MainLayoutProps {
    children: React.ReactNode
  }

const MainLayout= (props: MainLayoutProps) => {
    return (
    <>
    {props.children}
    <br/ >
    메인 레이아웃입니다.
    </>
    )
}

export default MainLayout