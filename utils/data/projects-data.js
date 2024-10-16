import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: '3D-MRI Brain Tumor Detection Model',
        description: " This study introduces an advanced brain tumor detection model using 3D-MRI images, leveraging a modified version of the level set segmentation technique combined with the Dragonfly Algorithm (DA). The DA, supported by K-means clustering, accurately identifies initial contour points, improving the precision and reducing the computational effort required for segmenting tumors. This approach enhances the accuracy and efficiency of detecting brain tumors, aiding in early diagnosis and treatment planning.",
        tools: ['3D-MRI Imaging', 'Level Set Segmentation', 'Dragonfly Algorithm(DA)', 'K-means Clustering', 'MATLAB'],
        role: 'Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Benchmark Zarr Implementation',
        description: ' Implemented benchmarks in Zarr using Airspeed Velocity (ASV) to catch any changes that introduce a performance regression and Benchmarks were updated to show the trend of various metrics',
        tools: ['Zarr', 'Python', "Air Speed Velocity"],
        role: 'Contributor',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Analysis of LEO Constellations and Supersonic Flights',
        description: 'WE explored the potential of low-earth orbit (LEO) constellations, analyzing their advantages for satellite communications and other applications.Also examined the implications of introducing supersonic flights, considering their benefits and the changes they would bring to existing flight models. This research aimed to provide a comprehensive outlook on the future of aerospace innovations.',
        tools: ['Data Analysis Software', 'Research Paper', 'Modelling Tools', 'Flight Simulation Data'],
        code: '',
        role: 'Research Intern',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },