import { Pages } from "./style"
import { Link } from 'react-router-dom'


export function Pagination({ page }) {
    page =  Number(page)

    const arrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"/></svg>;

    switch (page) {
        case 1:
            return(
                <Pages>
                    <span className="arrow">{arrowIcon}</span>
        
                    <Link to={"/" + page} className="activePage" disabled>{page}</Link>
                    <Link to={"/" + (page + 1)}>{page + 1}</Link>
                    <Link to={"/" + (page + 2)}>{page + 2}</Link>
        
                    <span>...</span>
                    
                    <span>500</span>
                    
                    <Link to={"/" + (page + 1)} className="arrow">{arrowIcon}</Link>
                </Pages>
            )

        break;

        case 500:
            return(
                <Pages>
                    <Link to={"/" + (page - 1)} className="arrow">{arrowIcon}</Link>
        
                    <Link to={"/" + (page - 2)}>{page - 2}</Link>
                    <Link to={"/" + (page - 1)}>{page - 1}</Link>
                    <Link to={"/" + page} className="activePage" disabled>{page}</Link>
        
                    <span>...</span>
                    
                    <span>500</span>
                    
                    <span className="arrow">{arrowIcon}</span>
                </Pages>
            )

        break
    
        default:
            return(
                <Pages>
                    <Link to={"/" + (page - 1)} className="arrow">{arrowIcon}</Link>
        
                    <Link to={"/" + (page - 1)}>{page - 1}</Link>
                    <Link to={"/" + page} className="activePage" disabled>{page}</Link>
                    <Link to={"/" + (page + 1)}>{page + 1}</Link>
        
                    <span>...</span>
                    
                    <span>500</span>
                    
                    <Link to={"/" + (page + 1)} className="arrow">{arrowIcon}</Link>
                </Pages>
            )
        break;
    }

}