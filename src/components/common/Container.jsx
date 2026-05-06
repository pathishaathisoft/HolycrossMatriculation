function Container({ as = 'section', className = '', children, ...props }) {
  const Component = as

  return (
    <Component className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </Component>
  )
}

export default Container
