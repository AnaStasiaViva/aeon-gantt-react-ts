
export function Spinner({...props}) {
  return (
    <svg
      {...props}
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2"
        stroke="#6bb3f2" stroke-opacity="0.72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
