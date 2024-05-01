

const Footer = () => {
  const today = new Date();
  return (
    <footer className="h-10 flex justify-center items-center">
	&copy; {today.getFullYear()} Ezequiel Valdiviezo
	
</footer>
  )
}

export default Footer