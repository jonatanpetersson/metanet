import React from 'react'
import './Sort.scss'

const Sort = ({isGridView, setGridView}) => {
  const handleGridView = (e) => {
    e.preventDefault();
    setGridView(!isGridView);
  }
  return (
    <section className="sort">
      <form className="sort__form">
        <div className="sort__form-options" >
          <select className="sort__form__select" id="metaverses" name="metaverses">
            <option value="allMetaverses">All Metaverses</option>
            <option value="decentraland">Cryptovoxels</option>
          </select>

          <div className="sort__form-btn-group">
            {/* <button className="sort__form-btn">
              <span className="material-icons-outlined">fullscreen</span>
            </button> */}
            <button className="sort__form-btn" onClick={handleGridView}>
              { isGridView ? 
                <span className="material-icons-outlined">fullscreen</span>
              :
                <span className="material-icons-outlined">grid_view</span>
              }
            </button>
          </div>
        </div>

        <select className="sort__form__select" id="sort" name="sort">
          <option value="allMetaverses">Sort by</option>
          <option value="recentlylisted">Recently listed</option>
          <option value="recentlysold">Recently sold</option>
          <option value="lowtohigh">Price:low to high</option>
          <option value="hightolow">Price:high to low</option>
          <option value="mostviewed">Most viewed</option>
        </select>

      </form>
    </section>
  )
}

export default Sort
