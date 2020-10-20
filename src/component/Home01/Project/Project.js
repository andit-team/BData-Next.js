import React, {useState} from 'react'
import IsoTopeGrid from "react-isotope";
import img1 from '../../../assets/img/recent-work/1.png'
import img2 from '../../../assets/img/recent-work/2.png'
import img3 from '../../../assets/img/recent-work/3.png'
import img4 from '../../../assets/img/recent-work/4.png'
import img5 from '../../../assets/img/recent-work/5.png'
import Masonry from 'react-masonry-css'

const Project=(props)=> {


    let filterList = [
        {
            label: "all",
            title: "Digital Agency",
            isChecked: true
        },
        {
            label: "business",
            title: "Business",
            isChecked: false
        },
        {
            label: "e-commerce",
            title: "E-commerce",
            isChecked: false
        },
    ];

    const [filters, setFilters] = useState(filterList);

    let cards= [
        {
            id: "a",
            img: img1,
            href: "#",
            row: 0,
            col: 1,
            w: 2,
            h: 1,
            filter: [ "e-commerce"]
        },{
            id: "b",
            img: img2,
            href: "#",
            row: 0,
            col: 2,
            w: 2,
            h: 1,
            filter: [ "business"]
        },{
            id: "c",
            img: img3,
            href: "#",
            row: 0,
            col: 3,
            w: 1,
            h: 2,
            filter: [ "business", "e-commerce"]
        },{
            id: "d",
            img: img4,
            href: "#",
            row: 0,
            col: 4,
            w: 2,
            h: 2,
            filter: [ "e-commerce"]
        },{
            id: "e",
            img: img5,
            href: "#",
            row: 2,
            col: 3,
            w: 2,
            h: 2,
            filter: [ "e-commerce"]
        },

    ]


    function handleFilter(key) {
        let newFilterList = filterList.map(filter => {
            return {
                ...filter,
                isChecked: filter.label === key
            }
        })
        setFilters(newFilterList);
    }


 const breakpointColumnsObj = {
  default:2,
  1100: 3,
  700: 2,
  500: 1
};
 return (
  <>
    <section id="recent-work" className="py100 bg-color">
        <div className=" container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="left-side-title">
                        <h3>Recent Projects</h3>
                        <h2 className="pt10">
                            Check Some of Our Recent Successful Projects
                        </h2>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="button-group works-button">
                        {filters.map(filter => (
                            <button className={ filter.isChecked ? "box-shadow active" :"box-shadow" } onClick={() => handleFilter(filter.label)} style={{cursor: "pointer"}} >
                                {filter.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row">

                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    <IsoTopeGrid
                        gridLayout={cards}
                        noOfCols={3}
                        unitWidth={400}
                        unitHeight={200}
                        filters={filters} 
                        >
                        {cards.map((card) => (
                            <div key={card.id} className={card.filter[0]}>
                                <div className="work-item">
                                    <img src={card.img} alt="img" />
                                    <div className="overlay-arae">
                                        <a href="project-details.html"> <i className="flaticon-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </IsoTopeGrid>
                </Masonry>


                </div>
            
             
        </div>
    </section>
  </>
 )
}

export default Project
