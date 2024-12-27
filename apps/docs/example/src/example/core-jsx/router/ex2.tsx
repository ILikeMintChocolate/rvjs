// <Router>
//   <Route path="/home" element={<HomePage />} />
//   <Route path="/about" element={<AboutPage />} />
// </Router>
//
//
// <Router>
//   <Route path="/product" element={<ProductPage />}>
//     <Route path="/:pid" element={<ProductDetailPage />} />
//   </Route>
// </Router>

function useNavigate(): (newPath: string, isExternal?: boolean) => void
