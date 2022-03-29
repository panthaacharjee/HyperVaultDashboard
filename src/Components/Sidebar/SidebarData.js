import dashboard from '../Images/Menu/Dashboard.png'
import account from '../Images/Menu/Account.png'
import calculator from '../Images/Menu/Calculator.png'
import hyperVault from '../Images/Menu/Hypervolt.png'
import swap from '../Images/Menu/Swap.png'
import docs from '../Images/Menu/Docs.png'


const SidebarData = [
     {
         name : "Dashboard",
         menuIcon : dashboard,
         path : "/"
     },
     {
        name : "Account",
        menuIcon : account,
        path : "/account"
    },
    {
        name : "Calculator",
        menuIcon : calculator,
        path : "/calculator"
    },
    {
        name : "Hyper Vault",
        menuIcon : hyperVault,
        path : "/hyper_vault"
    },
    {
        name : "Swap",
        menuIcon : swap,
        path : "/swap"
    },
    {
        name : "Docs",
        menuIcon : docs,
        path : "/docs"
    }
 ]
export default SidebarData;