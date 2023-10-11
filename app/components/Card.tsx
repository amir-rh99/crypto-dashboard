const Card = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="bg-card rounded-xl p-4 lg:p-5">
        {children}
    </div>
  )
}

export default Card