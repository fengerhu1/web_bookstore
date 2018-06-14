/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import './static/css/homepage.css';
import {Link } from 'react-router-dom';
import pic15 from './static/img/pic17.jpg'
import pic4 from './static/img/pic4.png'
import Head from './Head'


import './static/css/regist.css'
const bp = {
    display:"block"
}
const ap = {
    display:"none"
}
const cp={
    textAlign:"center",
}
const dp={
    width:"140px",
    height:"140px"
}
const ep={
    border:"0px solid #ffffff",
    borderBottom:"1px solid #e67e22",
    backgroundColor:"#ffffff",
}
const ep1={
    tableLayout:"fixed",
    border:"0px solid #ffffff",
    borderBottom:"1px solid #e67e22",
    backgroundColor:"#ffffff"
}
const fp={
    borderBottom:"1px solid #e67e22"
}
const gp={
    border: "1px solid #faedb7",
    height: "36px",
    padding: "6px 12px",
    fontSize: "14px",
    lineHeight: "1.42857143",
    color: "#555",
    backgroundColor: "#fff",
    backgroundImage: "none",
    borderRadius: "4px",
    boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
    transition: "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
}

const tp={
    background:"url("+pic15+")",
}
const up={
    background:"url("+pic4+")",
}
const sp={
    color:"#ffffff"
}
const sp1={
    color:"#ffffff",
    position:"relative",
    top:"25px",
}
const sp2={
    color:"#ffffff",
    position:"relative",
    top:"45px",
}
const sp3={
    color:"#ffffff",
    position:"relative",
    top:"68px",
}
const sp4={
    color:"#ffffff",
    position:"relative",
    top:"85px",
}
const yp={
    color:"#000000",
    position:"relative",
    top:"10px",
}
const zp={
    height:"100px",
    width:"100px",
}
class Personaldata extends Component {

    constructor(props) {
        super(props);
        this.state = {picstatus:true,cn1:true,cn2:false,cn3:true,cn4:false,cn5:true,cn6:false,cn7:true,cn8:false,cn9:true,cn10:false,
        name1:window.persondata[0][0],name2:window.persondata[0][1],name3:window.persondata[0][2],name4:window.persondata[0][3],name5:window.persondata[0][4]};
        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);
        this.click3 = this.click3.bind(this);
        this.click4 = this.click4.bind(this);
        this.click5 = this.click5.bind(this);
        this.click6 = this.click6.bind(this);
        this.click7 = this.click7.bind(this);
        this.click8 = this.click8.bind(this);
        this.click9 = this.click9.bind(this);
        this.click10 = this.click10.bind(this);
        this.click11 = this.click11.bind(this);
        this.click12 = this.click12.bind(this);
        this.addChapter = this.addChapter.bind(this);
    }

    componentDidMount() {
        var xmlhttp;
        if (window.XMLHttpRequest)
        {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                window.picshow = xmlhttp.responseText
                console.log(window.picshow)
                console.log("lalalallalalal")
                if (window.picshow[0] == "<")
                {

                    window.picshow = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsASwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooASg1Vub23tFzLKFPYdSfwrGufEEr5W2jCD+8/J/KuHFZhh8PpOWvZbmtOjOeyOgZ1RSzMAB3JwKoTa1ZwkgSeYfRBn9a5iWeac7pZWc/7RqOvCr8QTelGNvU64YJL4mbkviJz/AKm3A93bP6CqM2r3soIMiqPRUH9ao4pa8qrmWKq/FN/LT8jeNCnHZCu7SHLnNMwKdRiuJtt3ZstNhKMU6kxSsMbirMV5cwH93Lj/AICD/SoKMVcKk6bvBtegmk90akXiC7T/AFixyD6YNXofEUDcTRvGfUfMK53FJiu+lm2Lp/av66mMsNSl0sdpBfW9x/qpUY+mefyqwfpmuD6HPertvq15b4Ak8xf7snP69a9fD8QRelaNvNf5HNPBP7DOworItddt58LNmJ/9rkfnWqrBgCpBB6Yr3aGJpV43pyucc4Sg7SRT1a/Om6bJdiLzShUbM4ySwX0PrWHaeLLmeDzJtMEUjPGixLKXOW3dSFx/D2z19eK6S5t4ryAwToHjYglT7HI/UCqtvo2nWYIt7WONSythRgZXJB/U10EmVP4luYrC2uF09mM8pi53gKdxA/hz29BVq51a+jntYorFMXKFlaR3DIRtyHVUOOWx1rQj060jRVWBNqRmNVIyAp6jB9e/rT4rOCHyQkYHkoUj5JKqcZH6CgCle63b2UphZJ5JNyJiOMnJYjAB6E4OcelRHxLZGSNI1mkEgJVkiJB5wPzb5frV7+y7M3r3jwK07bfnbnG3pj0ph0XTSP8Ajzh/BcY4xx6UAU28S2IePaJ2RyRvETYAAJZunIGMH0pT4lshKUCTkBN+8RHGOo/8dBb6CrMGjadbtIUtIsyElsrnqMY9hjjFL/YumMebKDv/AA+p/wDrUANn1e2t5HDCZthVSY4mYFiM4474IP0q8k6PGrodyOAyn2NQnTrMzGY20ZkPVitWEVY0CKAqgYAA4FAD6KKKACiiigAooooASiiszUNWis8xrh5f7o6D61jWr06EXOo7IqMXN2iXpp4reIySsEUdzXP3uuvLlLYGNf7x+8fp6Vm3NzNdS+ZM5Y9h2H0FQ18njs6q1rwo+7H8X/kejSwkY6z1YrMzsWZizHqSck0mKWlrxLuWrOsSlxRS0WEJRS0YosAlLS4op2AbRTqKLANop2KMUWAbijFLRSsA3FFOxSUWAbVi1v57Nv3cny90blTUOKSqp1Z0pc0HZg4KSszqbLWIbrCN+7kP8LHg/Q1p54rgq1bDWpLfEc+ZIugb+Jf8a+mwGeJ2hiPv/wAzz62EtrA6mio4po541kjcMrdCKkr6OMlJXRxBRRRVAFFFFABRRRQAUUUUAFFFFACUdqDiud1bVi5a3t2wvR3Hf2FceMxlPC0+efyXc0p05VJWRJqes7SYbU5bozjt7CsAkkkkkk9SaMUtfEYvGVcVPnm/RdEetTpRpqyClopcVyliYpaKWnYBMUtLiinYQlLiiinYAooxS4osAlFLijFFhCUYpcUmKLDDFJS0UWASkp1JilYBKSnUlKwxtFLSVIyzZX01lLujOUP3kPQ//XrqrO8ivIRJGfqD1U+hrjDU1tcy2kwkjbB7g9GHoa9fLc1nhnyT1h+XoctfDqeq3O2oqrZXsd9CHQ4PQqeqmrVfZ06kakVODumeY007MWiiitBBRRRQAUUUUAJR2orM1bUPscO1D+9cfL7e9Y160aFN1JvRFQi5vlRU1nU9ubWA/MeHYdvasAUpJJJJJJ6k0V8FjMXPFVXOfyXZHr0qapxsgpaKWuU0ClopaqwgxRRS4pgJRilpadhCUYpcUtMQmKMUuKMUAJiilxRigBMUmKdijFADaKXFFADaKWilYYlJS0UrDG0UuKSpaGJSU6m0gJrS6ks7gSx/Rl7MPSuvtbmO6gWaM5Vv09q4o1d0zUDY3HzEmF/vj0969jKMxeHn7Oo/cf4M5cTQ51zR3OwopqsGUMCCCMginV9qnc8wKKKKACiiigCG4nS2gaVzhVGTXG3Nw91O8snVjwPQdhWlrt75kotkPyocv7n0/CscV8bnWO9rV9jB+7H8/wDgHpYWlyx5nuxaWkp1eIjrClopapCCiilpgFFLS1RIlLiilpgGKKMUtAhKMUuKXFOwXExRilxRiiwXG0U7FJiiwXExSU6kpDEpKdSUgG0lOpKQxKSlopDG0lOpKljG0lOpKkZvaDfbh9kkPIGYyfT0rerhI5GilWRDh1OQa7KyuVvLVJl/iHI9D3FfX5Jjva0/Yzeq29DzMVS5Zcy2Zaooor3zkEqtfXK2lpJMeqjgep7VZrm/ENzvnS3U8INzfU9P8+9cOY4r6vh5TW+y9TWjT55qJjszOxZjlmOSfU0Ugpwr8/8Ai1Z7IClFFLVIQUtFLVIQUtJS1RIUtFLTAKWgUtMQUUtFMQUUuKKdgEopaKLAJSYp1JilYBKTFOooAbSU6kpDG0lOpDUjG0lOpKQxKSlopMY2kpaSoYxDWtoN35VwYGPyScr7N/8AXrJpUdo3V1OGU5B966MJiJYetGoun5dSKsFOLid5SVBa3C3NvHKvRlz9Kmr9BjNSipR6njNWdmI7BELMcADJriJ5jPPJK3V2Jrp9an8rTZADzJhB+PX9K5QV8xxBXvONFdNTvwUNHIWlpBTq+dR2gKUUUtUhBS0lLVIQtLQKWqEApaKWmIKWilpiCiilpiExS4oxS0xCUYpcUYoATFJTqSgYlJS0UgEpKWikMbSU6kqRjaQ0tJSGJSUtJSYxKSnU01LGIaaadSGoZRv+HrjdFLbk8ody/Q//AF63a4/SZ/I1KI54f5D+P/166+vtslr+1wyi946Hk4qPJO/c57xHNmSCH0Bc/wAv8axBV7WJhNqUhHRVUD8s/wBapCvl8yq+1xU5edvu0O/Dx5aaQtLSClFcSNhaWgUVaELSikpRVEiilFFLTELS0lLVIQooopaYgpaKWmIKMUtGKYCYop1FMVxtJTqKQxtIadTaQCUlLRQMbSU6kqBjaQ0ppKRQ00hpxpKljQlIaWkqWMaaSnUhqWNCBirBh1U5FdtHOHhRx0ZQa4g11Gl3KnTYMnkLt/LiveyGtyTlBvdX/r7zjxcLpM5l3Mjlz1NIKaOlOrwW23dnZsLThTacKaAWgUUoqkIBThTaeAT0BP0FVYkKUU13SMEyOqAf3iB/Oq0mrabAP3uo2Uf+/cIP61rGnN7IltF0UorKbxLoKcNremj/ALe4/wDGoz4s8NqdreINLBHb7Un+NaKhV/lf3EuS7mzSishPFXh1xlde0wj/AK+0/wAamXxFob426zppz6Xcf+NP2FRbxf3C5l3NOlqpHqVhKAY7+0cHus6H+tWkdH+46t/ukGk4SW6DmHUUu1v7rflR0pWYhMUYpaKAEoopdrH+E/lRZjGUlOb5fvcfXioHuraM4e4hQ/7Uij+tHJJ7BzElJVSTVtMi/wBZqVkn+9cIP61D/wAJBoo/5jOnf+Bcf+NP2U+zHdGhSVnf8JDohPGs6b/4Fx/405dc0hzhNWsGPtdRn+tJ0Z/ysfMu5epDUK31nJ9y7tmz02zKf61KPmHy/N9OazcJLdFKQlJTiCOoI+tNrOwxKSlpDUsoQ0hpaSoYxpqWO6aJAgJwKiNNOc0RnKHwjsmtRw6UtIOlLSQMUVDeX1np1ubi+uobaEfxzSBB+tec/Ezx9qnhu+h0zTFiieWAStcsu5hkkYUHgdOvNeV2WneJ/HGpH7NBe6rdE/M5JYL9WPCj8RXvYHJJVoKpOVov7zjq4pQfKlqezap8XvDGnlktpLjUJBx+4j2r/wB9Nj9Aa4/UPjjqEmV0/SrWAdmndpD+QwK6Pwt+zxI4S48T6gIx1NpZnJ+jSHj8gfrXknjbSIdC8a6xpltGY7e2unSJCxJCZyvJ5PBFe7SyjCU/s39TkliakupqXfxT8X3ZONVMCn+GCJE/XGf1rCuvE+vXpP2nWL+XPUNcvj8s1j0td0KFKHwxS+Rk5ye7JJJ5pWLSSu5PUsxNMyfam0VrYkKKKKAClyaSigBd1SJPLGQUkdSOhViKioosBpQ67q9v/qdUvY/9y4cfyNadv4+8V2x/d+INR/4FOW/nmubqxZ2c9/ewWlshknnkWONB1ZicAVEqcH8SQ030Otg+LHjWH/mMs4HaSGNv/ZaJfiv41mz/AMTt0B7Rwxr/ACWtTWvg5rejeH5NUN1aXDwIZJ7eLduVR1IJGGx3/TNebVz0qeFqrmhFP5IuTnHRs6Wf4geLbg/vPEOof8BmK/yxWdL4j1ufPnaxfyA9Q1y5/rUnhfQz4k8S2GjpOsDXcvliVl3BeCenfpXtlt+zXbgZufEsre0VoB/NjXSqcI7RRF2eBSXlzMcy3Er/AO85NQliTknJ960vEGnLo/iLUtMR2kS0upYFdhgsFYgE/lWXTshDsn2pMmkopgLk0bqSigBdxqaK7uYTmK4ljP8AsuR/KoKKVkBuWvi3xFZkGDW79AO32hiPyJrbsvit4vtGXdqS3Kj+G4hR/wBcA/rXE0VnPD0Z/FBP5FKclsz1vT/jjeIVXUtHt5R3a2kMZ/I5FdnpPxW8L6mVSW6ksJT/AA3SYX/voZH54r5xpR9K4K2T4SpsuX0No4mpHzPr+GeK5hWaCWOWJh8skbBlP0Ip1fKmi+I9W8PXAm0y+ltzn5kByjf7yng19H+Dtan8Q+FLHVLqNI55gwcR/dJViuR6Zx0r53McrnhFzqV4vTzO2hiFUdram2abTjTSea8ZnSKOBilqe8i8i7kjx0x/IVBWlSDpzcH0dhJ3SZ4l8b4Nuu6ZP2e0K/8AfLn/AOKrvP2cNREvhzWNNLZNvdrMB7OuP5pXN/HC036XpN6B/q5pISf95QR/6CazP2ftZFh49k09zhNQtmRRnq6fOP0DV91lU+bBw+78TycSrVWfUtfI3xwsfsXxT1FwMLcxxTj8UCn9VNfXNfOX7SOlmPWtG1ULxNbvbsR6o24fo5/KvRMDw2iiigAooooAKKKKACiiigAooooAWu7+EmmnUPiHYOVylor3Lcf3Rgf+PEVwle4/AjRzHZaprDr/AK1ltoiR2X5m/Ur+VcmPq+yw05eVvvNKUeaaR69NClxBJBJzHKhjYexGD/OvjzU7GTTtVu7GUESW8zxNn1Ukf0r7Gr5u+MWkHTfHc9yq4iv41uF9N33W/UZ/GvGySracqfdfkdGJjomc74Jvf7O8c6Fdk4WO/hLHOON4B/Q19vdq+BYpWikWRCQ6kMpHYjpX3VoepJrGg6fqSEFLu2jmGP8AaUH+tfSHGfHvxMtvsvxL8Qx7cZvXfH+9839a5OvS/jrY/Y/ijeybcC6ghnHv8u0/qprzSgAooooAKKKKACiiigAooooAKKKKAHDrX094EtvsngTRYiME2wkI/wB4lv618zW0L3VzFbxjLyuEUe5OB/Ovra2tls7OC1QYSCNYl+igD+lfPcQ1LUoQ7u/3Hbgo+82SGkKknOKU1rWemi4tI5cdc/zNfNYXDyrzcY9rndOajuJr8Wy/V8cSJ+o/yKyxXQ+IYd9rHMOsbYP0P+RXO115vS9ni5eev3/8Eyw0uakjkvidpp1LwFf7Bl7bbcr/AMBPzf8AjpNfP+gavNoOv2GqwZ8y0nWUD+9g8j8RkfjX1VPBHdW0ttMN0UqNG49VIwf0NfKWs6dLo+s3enzAiS3laM574PB/EYNe1w9XvSlSfR3+85sZC0lI+5LC8g1HT7a9tnDwXESyxsO6sMj9DXm/x60b+0vh1JdouZNOuEnyOu0/I3/oQP4VmfAHxgup+HZPDlzLm6075oQTy0DH/wBlY4+hFeqa3pkWs6JfaZcf6q7geFvbcMZ/DrX0JxHwjRVq/s59N1G5sblCk9vK0UinsynB/UVVoAKKKKACiiigAooooAKKKKAJEVncKoJYnAA7mvrLwfog8O+FNO0sgCSKIGb3kb5m/U4/CvCfhN4b/t3xfFdTR7rPTsXEmehfPyL+fP0U19I5r53O8Rdxorpq/wBDsw0NHIWvM/jXof8AaHhWDVI1zLp8vzkDnynwD+TbfzNel5qtqFlBqWn3NlcLuhuYmikH+yRivIwlf2NaNTsbzjzRaPjjoa+q/gNr41b4fpYO+Z9MlaAg9djfMh/Uj/gNfMut6VPoms3em3S4mtpTG3vjoR7EYP412/wW8Vjw145it55NllqQFtKc8K+f3bH/AIFx9GNfcJpq6PMOx/aR0oi60PWFGVZJLWQ+hB3L/NvyrwWvr74zaEdc+G2oeWm6eyxeR8Z+597/AMdLV8g0wCiiigAooooAKKKKACiiigAooooA7L4ZaT/anjqxDruitSbmT6J0/wDHttfSFeY/BjQjaaJc6zKmHvH8qLP/ADzQ8n8W/wDQa9ONfFZ3iPa4lxW0dP8AM9XCw5ad+4hrsrGIw2MCEchBmuTtYfPu4Yv7zgH6d67YDgV28PUvjqryX+ZjjJ2aiV72D7RaSxd2U4+vauL5B5613h64rkNWt/s+oSADCyfOv49f1q+IMPeMay6aP9CcFPVxKdeL/Gfw6YL638QQJ+7nAhuMDpIB8pP1UY/4DXtAqjrOk22uaPdaZdjMNwm0kDlT1DD3Bwa8TLsX9WrqfTZ+h2VqftINHzN4Y8Q3fhXxFZazZH97bvkoTgSIeGU+xGR+tfZuga9Y+JtCttW06USW9wmRnqh7q3oQeDXxXrujXWg6vcabeJtmhbGezDsw9iOa674Y/Ea48DatsnDTaPcsPtEA6qenmJ/tDuO449K+/UlJKS2Z47VtGbfx88LNpHi5NbgTFtqi5cgcLMoAYfiMH868ir7M8UaPpfxM8BS29pdQzR3CCazuQMhJB90+o7qR1wTXx9f2FzpmoXFjeQtFcwOY5Y26qwOCKYipRRRQAUUUUAFFFFAC1JHE80qxxqXdiFVVGSSewqOvYvhB4GMsyeJdSixFGf8AQo3H327yfQdvfntWGIxEKFN1JFwg5ysj0XwD4XXwp4YgtJFAvZv310w/vkfd+ijj8/WunzSUV8PWrSqzc5bs9JRUVZC5ozSUVmUeQfGvwoZoYfEtrHlowIbwAfw/wP8Ah90/8BrxIEg5HBFfY91awXtpNa3MSywTIY5I26MpGCK+YPHPhK48I689s26S0ly9tMV++nof9odD+fevqMnxinD2MnqtvT/gHDiKdnzI+ivhL45h8beFDYag4k1SzjEN0j9Zo8YEnvkcH3+or5w8deGJfCPjC/0lwfKjk327H+OJuUP5cH3Bqj4c8Rah4W1qDVdNl8u4hPQ/dde6sO4Ne1+L49N+MfgiPXtBQDxBpafv7LOZCh5ZP9oZyVPfkdTivbOY+faKUggkGkoAKKKKACiiigAooooAWtTQdHude1q10y2H7yd9u7HCr3Y+wGTWWBmvoH4XeDD4f0s6nfR41C8QYRhzDF1A9ieCfwHrXHj8XHC0XN79PU1o0nUlY7iwsYNN063srVdsFvGI4x7Afz71YNBpCa/P5Tc5Nvc9hK2hr+H4PMvHmI4jXA+p/wDrV01ZujW/2fT0JGGf5z+PT9K0q+6yvDuhhox6vV/M8ivPnqNhWRrtp59n5qjLxHP4d616ayhlIIyD2rqxNCNelKm+pnCbhJSRwlKKsX9qbO7ePHydUPtVevzyrTlSm4S3R7cJKSujkfHvgiDxdpweHZFqluD5Ep4Djrsb29D2P418631hdabey2l5C8NxE2143GCpr65BrnPFfgrS/FtsBdoYbtBiK6jA3r7H+8vsfwxXuZXmzofuqusfy/4By4jD8/vR3PEPBPxE1rwNfGSwkE1nIf31nKT5cnuP7re4/HNd/wCKR4a+L1smq6DPHY+Ko0CyafdMIzdAdArdGYdj3HBA4x554m+H+ueGmeSa3NxaA8XMALJj/a7r+NcoMjmvrKdSFSPNB3R5souLsye7s7mxu5bW7gkguIm2yRSqVZD6EHpVart5qd7fpGt5cy3HlDajStuZR6ZPOPaqVWIKKKKAFoxzV3TtLvtWu1tbC1muZ26RxIWNew+Dvg7FbNHfeJSkrjDLYocqD/tt3+g49zXNicZRw0bzfy6mkKcpvQ5n4d/DmbxJcJqeqRvFpEZyB0a4I7D/AGfU/gPb6BijjhiSKJFjjRQqIowFA4AA7ChFWNFSNVVFAVVUYAA6ADtTs18hjcdPFT5paJbI9CnSVNWQtFJRXFc0FzRSUUXAWsjxJ4c0/wAUaPJp2oJ8p+aOVR80T9mX/DuK1qKunVlCSlF2aE0mrM+VPFHhTU/CeqNaX8eUbJhuFHySr6g+vqOoqnouuaj4e1SLUdKu5LW5j6Oh6juCOhB9DxX1Tq2k2Gt6fJY6lapcW79VcdD6g9QfcV4t4p+DWoWLPc+H5Df23XyHIEyew7P+GD7V9Vgs3p1Uo1Pdl+DOGrh5R1jqjntZvtG8YO2oRpFpGuv81xCTi1um7ujf8s3PdW+U+oPXj5YpIJWjlUq6nBBqS6s7mxuGguoJYJl4aOVCrD8DVevYTucwUUUUAFFFLigAHWnAHdit/QPB2ueJJB/Z1i5izzPINkS/8CP9MmvZ/CHwx0zw40d5eFb7Ul5V2X93Ef8AZU9T7n8AK4cXmNDCr3nd9lubU6E6m2xzvw4+GzRNDrmuwbWGHtrSQc57O4/kv4mvXKXNNr4vGYypiqnPP5LsepSpxpxsgqxp9sbu8jix8udz/QVWrptDs/ItjMwxJJz9F7VrlmE+sYhJ7LV/15kV6ns4Pua4GBiloor708gKKKKAMvWLL7XbbkH71OV9/UVytd7XMa3YfZ5vtEY/dOfmA/hb/wCvXzWeYDmX1iC23/zO3CVre4zKpabS18sj0R39a5vV/h/4Y1p2e50uKOZuTLbHymJ9Tjg/iK6OlrelXqUnenJr0IlFS0aPLbz4HaXJk2Wr3cPoJolkA/EYrLb4F3OTs16Ajtut2B/nXs9LXoxzjFx05/wRi8NTfQ8ch+BR3A3Gvrtz0itST+rV0Wm/Bzw1aMGumur9h2lk2L+S8/rXoNLUzzXFzVnP7rIFh6a6FbTtLsNJtvs+nWcFrF3WFAufr6/jVymZpa4ZTcneTuzW1th1GaSikA6jNNzS0CFopKKAFzRmkzSZoGLRSUZoAqajpWn6tD5Wo2Nvdx9hNGGx9CeR+Fchf/CPwneMWjtbi0J/595zj8mzXc0lb0sXWpfw5NEypxlujyyX4G6QT+51e+Qf7cSN/hUI+Bdhk5125x2xbr/8VXrNJXR/a2MX2/wX+RH1en2PNLX4JaBEwNxqF/PjqAUQH9DXS6b8PvC2lMHt9HhkkHIkuSZTn/gXH6V01JWNTMcVUVpTf5fkXGjTWyEACqFUAADAAGAKKKSuFu5qBpKKWON5ZFjRdzscAUopydkMt6ZZG8ugGH7pPmf/AArr1AAwKq6fZLZWyxjBY8s3qat191lmC+q0bP4nq/8AL5HkYir7SWmwtFFFemYBRRRQAVHLEk0TRuoZGGCKkoqWk1ZgcVf2T2M5jblDyjeo/wAarV2l5aR3kBicdeQe4PrXI3NtLaTGOUc9iOjD1FfF5rlrw0+eHwv8PI9TD1+dWe5FS0lFeQdI6myzxW6eZNLHEnTdI4UfmaWkeOOVdskaOvXDqGH61UWr6iZW/tbTAQP7Sssnp/pCf41JHqNjK22O+tHb0WdCf508W1uBgW8IHoI1/wAKY+n2Mi7ZLG1cejQKf6Vrel5k+8WgCRkAkeoFFZh0DSs5SxjiPrCWjP8A46RSnS5oubTVb2LHRZWE6fk4z/49VctN7S+9f5Br2NKlrME+rW3+vtYLxP79q3lv/wB8OcH8Gqa01S0vZDDHIVuFGWt5VKSr9VPP4jI96HTkldary/rT5iui7mikorMdhc0ZpKKAFzRmkpryJFG0kjqiKMszHAA9yelAD6Sswa1Hcf8AIOtp77n/AFkYCRf9/GwD/wABzQU1i4PzT2dmn92OMzv/AN9NtX/x01p7KS+LT1/y3FzLoaeaNrHop/Ks3+ymf/X6nqMp7hZhEPyQCkOg6aTl4ZJD6yXErH9WpctNby+5f5tD97saexv7rflSHI6gj61mf2BpX/Pmo+kjj/2ardtaw2cRjgVlQnOC7Nz9WJqZezt7rf3f8FjV+pPSUUlZXKCkopKkYV0mjab9nT7RMv71hwD/AAj/ABqvo+lHK3M6+6If5mugr6nJ8scbV6y16L9TzsVXv7kR1FFFfSnEFFFFABRRRQAUUUUAJVW9so76ExyD3Vh1Bq1RWdSnGpFwmrpjTad0cVd2k1nL5co4/hYdGFV8121zbRXUJjlXcp/T3Fcvf6XNZMWGXi7OO31r47Mconh26lLWP4o9KhiVLSW5SzS03NLXjXOsdRmkozTuIdS5ptFO4Dqgu7K2voxHdQJKqnK7hyp9VI5U+4IqbNFVGTTumJq5mbdQ0w5RpNRtB1RsfaIx7HgSD2OG9zV60vLe+txPbSrJGSRkcYI6gg8gjuDyKlrPvLCUTtfae6Q3pA3h/wDV3AHQP7+jDke44rdSjU0lo+/+f+ZNmtjRorOj1mzNk91Mxt/Kby5opB88cn9zA6k9sZ3ZBGah+y3Or4bUUaCzPK2Ofmf3mI/9AHHqT0pKi1rPRf1t3Dm7EjapJeO0WkxpPg4a6kJECHuARy59l49SKWPR4nkE1/I9/ODkGYDy0P8Asxj5R9eT71oKAiqqqFVRgADAA9AKWk6ttIafn94ct9xfrRmkpM1jcoXNFJRmlcYUUlJSuAuaSjNLHG8sgSNSzt0AojFydkGw2tzStHOVnuV90jP8z/hVjTdGW3KzXGHl6gdl/wATWxxX1OWZPytVq616L/M8+vir+7AdRRRX0hxBRRRQAUUUUAFFFFABRRRQAUUUUAFNIDAggEHsadRRuBg3+ghsyWmFbvGeh+npWDJG8MhSRGRx1BFd3Ve4tILtNsqBvQ9x9DXg47JKda8qXuv8DrpYqUdJao4qlrWu9Amiy1u3mL/dPDD/ABrKdHjco6srDqGGDXzGIwdbDu1SNvy+874VIT+Fhmim0tc1zQXNLTc0U7iHZozSZozRcCBrG1e+S9a3iN0i7VmK/MB7H8T+ZqxSZozVObe4rC5opM0ZqbjFpKSii4C0maM0hNK4xaTNWbbT7m7I8qMhP77cCt2z0O3tyHmPmyD1Hyj8K9HCZZiMRqlZd3/WphUxEKfqY1lpdxeEMB5cf95h/L1rpbLT4bFNsa5Y/eY9TVoAAcUtfVYLLKOF1Wsu7/TsefVxEqnoLRRRXpmAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACVDPbQ3C7ZY1ce4qakrOcYy92SuhptaoxLjw7GwJt5Sh/utyKzJ9JvYMnyvMX1jOf0rr6SvMr5LhqusVyvyN4Yqcd9ThGVkOHUqfQjFJmu4ljRxh0Vh7jNUrjSrJlJ+zqD/s8fyrx6+Qzgm4zT9f6Z0xxl90cpmjNWb2FIHIQYHvVPcc9a8KcXCXKzsTurj80ZpMmkJNRcY7NGaROTzW1p9hbTAeZFu+rH/GurD4WdeXLFr5kTqciuY2amhtLi4/1UDv7gcfnXWR2VrBgxwRqfXbVrpXuUeH0/4k/uX6nHPGP7KOag8P3D8zSJGPQfMa1bfRrS3wxTe4/ifn9OlaPajtXr4fLMNQfuxu+71OadepPdgAB0paKK9IxCiiigAooooAKKKKACiiigAooooA//2Q==";
                    //console.log(window.picshow);
                    console.log("window.picshow")
                }
                //console.log(window.picshow)
            }
        }

        xmlhttp.open("GET","/mongoUsershow",false);
        xmlhttp.send();
        this.setState({picstatus:false});

    }
    addChapter() {
        var reader = new FileReader();
        let input = document.forms['fileinfo'].from1
        let data = new FormData()
        data.append('from1', input.files[0])
        var imgUrlBase64;
        var ans;
        imgUrlBase64 = reader.readAsDataURL(input.files[0]);
        reader.onload = function (e) {
            //var ImgFileSize = reader.result.substring(reader.result.indexOf(",") + 1).length;//截取base64码部分（可选可不选，需要与后台沟通）
            if (0) {
                alert( '上传为空');
                return;
            }else{
                //执行上传操作
                ans = reader.result;
                console.log(ans);
                var xmlhttp;
                if (window.XMLHttpRequest)
                {
                    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                    xmlhttp=new XMLHttpRequest();
                }
                xmlhttp.onreadystatechange=function()
                {
                    if (xmlhttp.readyState==4 && xmlhttp.status==200)
                    {
                    }
                }

                xmlhttp.open("POST","/mongoUserInfo",true);
                xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xmlhttp.send("pic="+ans);
                alert(reader.result);
            }
        }
    }
    click11(){
        var self = this;
        var xmlhttp;
        if (window.XMLHttpRequest)
        {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
            }
        }

        xmlhttp.open("GET","/savepersonback?username="+this.state.name1+"&email="+this.state.name2+"&password="+this.state.name3+"&phone="+this.state.name4+"&address="+this.state.name5,true);
        xmlhttp.send();
    }
    click12(){
        var reader = new FileReader();
        let input = document.forms['fileinfo2'].from2
        let data = new FormData()
        data.append('from2', input.files[0])
        var imgUrlBase64;
        var ans;
        imgUrlBase64 = reader.readAsDataURL(input.files[0]);
        reader.onload = function (e) {
            //var ImgFileSize = reader.result.substring(reader.result.indexOf(",") + 1).length;//截取base64码部分（可选可不选，需要与后台沟通）
            if (0) {
                alert( '上传为空');
                return;
            }else{
                //执行上传操作
                ans = reader.result;
                console.log(ans);
                var xmlhttp;
                if (window.XMLHttpRequest)
                {
                    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                    xmlhttp=new XMLHttpRequest();
                }
                xmlhttp.onreadystatechange=function()
                {
                    if (xmlhttp.readyState==4 && xmlhttp.status==200)
                    {
                    }
                }

                xmlhttp.open("POST","/mongoUserUpdate",true);
                xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xmlhttp.send("pic="+ans);
                alert(reader.result);
            }
        }
    }
    click1(){
        console.log("click")
        this.setState({cn1: !this.state.cn1,
            cn2: !this.state.cn2});
    }
    click2(e)
    {
        var nameValue = e.target.parentNode.childNodes[0].value;
        this.setState({cn1: !this.state.cn1,
            cn2: !this.state.cn2,
        name1:nameValue});
    }
    click3(){
        console.log("click")
        this.setState({cn3: !this.state.cn3,
            cn4: !this.state.cn4});
    }
    click4(e)
    {
        var nameValue = e.target.parentNode.childNodes[0].value;
        this.setState({cn3: !this.state.cn3,
            cn4: !this.state.cn4,
            name2:nameValue});
    }
    click5(){
        console.log("click")
        this.setState({cn5: !this.state.cn5,
            cn6: !this.state.cn6});
    }
    click6(e)
    {
        var nameValue = e.target.parentNode.childNodes[0].value;
        this.setState({cn5: !this.state.cn5,
            cn6: !this.state.cn6,
            name3:nameValue});
    }
    click7(){
        console.log("click")
        this.setState({cn7: !this.state.cn7,
            cn8: !this.state.cn8});
    }
    click8(e)
    {
        var nameValue = e.target.parentNode.childNodes[0].value;
        this.setState({cn7: !this.state.cn7,
            cn8: !this.state.cn8,
            name4:nameValue});
    }
    click9(){
        console.log("click")
        this.setState({cn9: !this.state.cn9,
            cn10: !this.state.cn10});
    }
    click10(e)
    {
        var nameValue = e.target.parentNode.childNodes[0].value;
        this.setState({cn9: !this.state.cn9,
            cn10: !this.state.cn10,
            name5:nameValue});
    }
    render() {
        var bp1 = this.state.cn1?{display:'block'}:{display:'none'};
        var bp2 = this.state.cn2?{display:'block'}:{display:'none'};
        var bp3 = this.state.cn3?{display:'block'}:{display:'none'};
        var bp4 = this.state.cn4?{display:'block'}:{display:'none'};
        var bp5 = this.state.cn5?{display:'block'}:{display:'none'};
        var bp6 = this.state.cn6?{display:'block'}:{display:'none'};
        var bp7 = this.state.cn7?{display:'block'}:{display:'none'};
        var bp8 = this.state.cn8?{display:'block'}:{display:'none'};
        var bp9 = this.state.cn9?{display:'block'}:{display:'none'};
        var bp10 = this.state.cn10?{display:'block'}:{display:'none'};
        return(
            <article id="109" className="post tag-android tag-ke-hu-duan">

                <div className="post-content">
                    <nav className="navbar navbar-inverse navbar-fixed-top" style={up}>
                        <div className="container-fluid col-md-4" >
                            <div className="navbar-header">
                            </div>
                        </div>
                        <div className="container-fluid col-md-offset-2 col-md-4">
                            <div className="navbar-header">
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 sidebar" style={tp}>
                                <ul className="nav nav-sidebar">
                                    <li  style={sp}><Link to="./personaldata" style={sp}>个人资料 <span className="sr-only">(current)</span></Link></li>
                                    <li  style={sp1}><Link to="./" style={sp}>首页</Link></li>
                                    <li  style={sp2}><Link to="./shopcar" style={sp}>我的购物车</Link></li>
                                    <li  style={sp3}><Link to="./starhome" style={sp}>我的收藏</Link></li>
                                    <li  style={sp4}><Link to="./order" style={sp}>我的订单</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-9 col-sm-offset-3 col-md-7 col-md-offset-2 main">


                                <div className="col-md-offset-5">
                                <img className="img-circle " src={window.picshow} style={zp}/>
                                </div>
                                <br/>
                                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                                    &times;
                                                </button>
                                                <h4 className="modal-title" id="myModalLabel">
                                                    Love
                                                </h4>
                                            </div>
                                            <div className="modal-body">
                                                <form
                                                    name="fileinfo">
                                                    {/*accept限定图片上传格式，指定id，方便formData上传时获取file的数据*/}
                                                    <input id="imgUrl" name="from1" type="file" accept="image/jpeg,image/x-png,image/gif"
                                                           ref="files"/>
                                                </form>
                                                <input style={{opacity: 1}} onClick={() => {
                                                    this.addChapter()
                                                }} form="UpdataImg" id="Button1" type="submit" value="上传"/>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                                                </button>
                                                <button type="button" className="btn btn-primary">
                                                    确定
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                                    &times;
                                                </button>
                                                <h4 className="modal-title" id="myModalLabel2">
                                                    Love
                                                </h4>
                                            </div>
                                            <div className="modal-body">
                                                <form
                                                    name="fileinfo2">
                                                    {/*accept限定图片上传格式，指定id，方便formData上传时获取file的数据*/}
                                                    <input id="imgUrl2" name="from2" type="file" accept="image/jpeg,image/x-png,image/gif"
                                                           ref="files"/>
                                                </form>
                                                <input style={{opacity: 1}} onClick={() => {
                                                    this.click12()
                                                }} form="UpdataImg2" id="Button2" type="submit" value="上传"/>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">关闭
                                                </button>
                                                <button type="button" className="btn btn-primary">
                                                    确定
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <table className="table table-hover" style={ep1}>
                                    <tbody>
                                        <tr style={ep}>
                                            <td style={ep}>
                                                用户名
                                            </td>
                                            <td style={ep}>
                                                <div style={bp1}>{this.state.name1}</div>
                                                <div style={bp2}>
                                                    <input className="col-md-5 "value={this.state.name1} placeholder={this.state.name1} style={gp}/>
                                                    <button className="btn btn-default" onClick={this.click2}>完成</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <br/>
                                        <br/>
                                        <tr style={ep}>
                                            <td style={ep}>
                                                邮箱
                                            </td>
                                            <td style={ep}>
                                                <div style={bp3} onClick={this.click3}>{this.state.name2}</div>
                                                <div style={bp4}>
                                                    <input className="col-md-5 "  placeholder={this.state.name2} style={gp}/>
                                                    <button className="btn btn-default" onClick={this.click4}>完成</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <br/>
                                        <br/>
                                        <tr style={ep}>
                                            <td style={ep}>
                                                密码
                                            </td>
                                            <td style={ep}>
                                                <div style={bp5} onClick={this.click5}>{this.state.name3}</div>
                                                <div style={bp6}>
                                                    <input className="col-md-5 "  placeholder={this.state.name3} style={gp}/>
                                                    <button className="btn btn-default" onClick={this.click6}>完成</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <br/>
                                        <br/>
                                        <tr style={ep}>
                                            <td style={ep}>
                                                手机号
                                            </td>
                                            <td style={ep}>
                                                <div style={bp7} onClick={this.click7}>{this.state.name4}</div>
                                                <div style={bp8}>
                                                    <input className="col-md-5 "  placeholder={this.state.name4} style={gp}/>
                                                    <button className="btn btn-default" onClick={this.click8}>完成</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <br/>
                                        <br/>
                                        <tr style={ep}>
                                            <td style={ep}>
                                                收货地址
                                            </td>
                                            <td style={ep}>
                                                <div style={bp9} onClick={this.click9}>{this.state.name5}</div>
                                                <div style={bp10}>
                                                    <input className="col-md-5 " placeholder={this.state.name5} style={gp}/>
                                                    <button className="btn btn-default" onClick={this.click10}>完成</button>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <button className="btn btn-default" onClick={this.click11}>储存</button>
                            <br/>
                            <br/>
                            <button className="btn btn-default" data-toggle="modal" data-target="#myModal">
                                上传
                            </button>
                            <br/>
                            <br/>
                            <button className="btn btn-default" data-toggle="modal" data-target="#myModal2">
                                更新
                            </button>
                            <aside className="col-md-offset-10 col-md-2 sidebar">

                                <div className="widget">
                                    <h4 className="title">官方</h4>
                                    <div className="content community">
                                        <p>QQ群：2748250768</p>
                                        <p><a href="http://wenda.ghostchina.com/" title="Ghost中文网问答社区" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '问答社区'])"><i className="fa fa-comments"></i> 问答社区</a></p>
                                        <p><a href="http://weibo.com/ghostchinacom" title="Ghost中文网官方微博" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '官方微博'])"><i className="fa fa-weibo"></i> 官方微博</a></p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </article>
        );

    }
}


export default Personaldata;