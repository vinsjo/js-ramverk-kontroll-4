import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import { Button } from '../elements';

const Logo = () => {
	return (
		<Link to="/" title="Home" className={styles.logo}>
			<Button variant="icon">
				<svg
					width="235"
					height="101"
					viewBox="0 0 235 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M43.1257 34.1452C42.53 34.1723 42.1073 34.257 41.8578 34.3993C41.9019 34.619 41.9239 34.9925 41.9239 35.5199V44.9461C42.1 45.0779 42.6064 45.1438 43.4431 45.1438C43.8173 45.1438 44.1518 45.0779 44.4467 44.9461C44.8113 44.7831 45.1152 44.5194 45.3587 44.1551C45.799 43.4959 46.0192 42.4192 46.0192 40.9251V38.5521C46.0192 37.2085 45.8763 36.1978 45.5904 35.5199C45.5397 35.3995 45.4845 35.2896 45.4247 35.1903C45.0724 34.4871 44.4559 34.1356 43.5752 34.1356C43.4158 34.1356 43.2659 34.1388 43.1257 34.1452ZM76.0075 59.9753C73.2773 61.9968 71.0535 63.0075 69.3361 63.0075C68.3738 63.0075 67.6883 62.775 67.2794 62.31C66.9771 61.9664 66.826 61.4958 66.826 60.8981C67.6882 60.6213 68.5249 60.3075 69.3361 59.9568C69.9447 59.6936 70.539 59.4097 71.1189 59.1049C72.135 58.5709 73.107 57.973 74.0349 57.3112C75.2644 56.4343 76.4164 55.4453 77.4909 54.3442C78.1483 53.6704 78.7768 52.9547 79.3762 52.197C82.7229 47.9783 84.3962 42.9246 84.3962 37.036C84.3962 26.7528 80.4771 18.7768 72.6387 13.1079C65.1967 7.70262 54.8704 5 41.6597 5C35.891 5 30.1223 5.57129 24.3537 6.71386C18.585 7.81248 13.9172 9.28464 10.3503 11.1303C6.78344 12.9321 5 14.7998 5 16.7333V79.3551C5 83.7935 6.69537 87.1773 10.0861 89.5064C13.4769 91.8355 18.0125 93 23.6931 93C31.6195 93 38.1148 91.2202 43.1789 87.6607V82.0577L39.4138 72.5655C38.9838 72.5391 38.5797 72.5055 38.2015 72.465C38.1417 72.4586 38.0826 72.452 38.0241 72.4452C37.7425 72.4127 37.4759 72.3761 37.2243 72.3354C35.6509 72.0809 34.6649 71.6672 34.2663 71.0942C34.1311 70.8999 34.0635 70.6872 34.0635 70.4562C34.0635 69.841 34.2397 69.3576 34.5919 69.006C36.207 69.2578 37.663 69.4447 38.96 69.5667C39.1761 69.587 39.3878 69.6055 39.5952 69.6222C40.3145 69.6802 40.9807 69.7165 41.5936 69.7311L43.9715 76.191C44.5809 77.8939 45.2764 79.4688 46.0578 80.9157C46.2684 81.3057 46.4853 81.6863 46.7083 82.0577C47.1716 82.8288 47.6618 83.5599 48.1789 84.2509C49.8274 86.4538 51.7496 88.2495 53.9456 89.6382C57.4244 91.8794 61.5197 93 66.2316 93C72.4846 93 77.3726 91.1543 80.8954 87.4629C84.4623 83.7715 85.7173 72.8292 85.7173 72.8292C90.6848 73.3989 90.6847 73.3997 90.6846 73.4005L90.6844 73.4022L90.6839 73.4065L90.6825 73.418L90.6784 73.453C90.675 73.4816 90.6703 73.5204 90.6643 73.5691C90.6522 73.6664 90.6347 73.8029 90.6116 73.9742C90.5655 74.3165 90.4966 74.7995 90.4027 75.3867C90.2157 76.5551 89.9247 78.1658 89.5085 79.9176C89.096 81.6537 88.538 83.625 87.7947 85.4794C87.0862 87.2468 86.0514 89.3177 84.5024 90.9256C79.8312 95.8139 73.5159 98 66.2316 98C60.7037 98 55.6455 96.6758 51.2558 93.8531C49.855 92.9657 48.5591 91.9553 47.3645 90.8302L46.0542 91.7513C39.9394 96.0493 32.3602 98 23.6931 98C17.3756 98 11.7416 96.7095 7.25516 93.6277C2.38491 90.2824 0 85.2873 0 79.3551V16.7333C0 14.0971 1.24708 11.9733 2.72145 10.4293C4.15523 8.92786 6.03799 7.70885 8.07414 6.67843C12.2105 4.54184 17.3732 2.95461 23.4002 1.80557C29.4766 0.603239 35.5646 0 41.6597 0C55.4811 0 66.9787 2.81835 75.5745 9.06046C84.8023 15.7368 89.3962 25.2694 89.3962 37.036C89.3962 43.9401 87.4083 50.1167 83.2941 55.3034C82.5641 56.2259 81.7959 57.0973 80.9902 57.917L89.571 66.6781L89.5718 66.679L86 70.1778L76.0075 59.9753ZM86 70.1778L85.7173 72.8292L90.6848 73.3989L90.687 73.3791L91.2218 68.3636L89.5718 66.679L86 70.1778Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M151.775 53.6019C155.925 57.6295 158 63.2306 158 70.4052C158 77.6171 155.08 83.6022 149.241 88.3606C142.919 93.4535 134.421 96 123.747 96C117.871 96 112.775 95.5539 108.461 94.6617C104.147 93.8067 99.9445 92.2825 95.8535 90.0892C93.0641 86.0372 91.6694 81.9294 91.6694 77.7658C91.6694 73.5651 93.1013 70.0892 95.965 67.3383C96.2901 67.026 96.6236 66.7315 96.9654 66.4547C97.1014 66.3445 97.2388 66.2371 97.3775 66.1326C98.2988 65.4381 99.2787 64.8675 100.317 64.4207C102.19 63.6148 104.254 63.2119 106.509 63.2119C106.753 63.2119 106.995 63.2148 107.234 63.2206C111.107 63.3142 114.286 64.1664 116.774 65.7769C117.467 66.2197 118.113 66.7348 118.711 67.3221C118.716 67.3269 118.721 67.3318 118.726 67.3366C119.457 68.0556 120.116 68.8824 120.705 69.8171C120.768 69.9176 120.831 70.0194 120.893 70.1224C120.91 70.1515 120.927 70.1806 120.945 70.2099C121.327 70.8582 121.678 71.5553 121.997 72.3011C122.247 72.8847 122.477 73.498 122.687 74.1413C123.057 74.074 123.372 73.9711 123.63 73.8327C124.229 73.5124 124.528 73.0019 124.528 72.3011C124.528 71.2602 124.193 70.1078 123.524 68.8439C122.891 67.5428 121.943 66.316 120.679 65.1636C119.946 64.5052 119.156 63.9198 118.308 63.4072C118.303 63.4041 118.298 63.401 118.293 63.3979C115.314 61.601 111.628 60.7026 107.234 60.7026C106.991 60.7026 106.749 60.7061 106.509 60.7132C103.992 60.7872 101.631 61.2483 99.4238 62.0967C98.5426 61.6499 97.7228 61.1132 96.9643 60.4867C95.5142 59.2887 94.2885 57.7622 93.2873 55.9071C91.7624 53.0818 91 50.0335 91 46.7621C91 38.2119 94.5704 31.6134 101.711 26.9665C107.848 22.9888 115.416 21 124.416 21C131.111 21 136.745 21.7249 141.32 23.1747C145.894 24.5874 149.632 26.4089 152.533 28.6394C153.388 31.0929 153.816 33.6394 153.816 36.2788C153.816 38.9182 153.463 41.316 152.756 43.4721C152.646 43.8093 152.527 44.136 152.401 44.4523C152.211 44.9309 152.002 45.3855 151.776 45.8161C151.593 46.1652 151.398 46.4986 151.192 46.8163C150.745 47.5039 150.244 48.1178 149.688 48.658C148.423 47.7286 146.136 46.7807 142.826 45.8141C139.516 44.8476 136.503 44.3643 133.789 44.3643C133.209 44.3643 132.669 44.3719 132.171 44.3872C130.336 44.4434 129.053 44.6031 128.321 44.8662C127.429 45.2007 126.983 45.7212 126.983 46.4275C126.983 46.568 126.992 46.7052 127.012 46.8391C127.039 47.0242 127.085 47.2029 127.15 47.3755C127.727 47.2272 128.377 47.1118 129.1 47.0292C129.11 47.028 129.12 47.0268 129.131 47.0257C129.973 46.9309 130.914 46.8804 131.953 46.8742C132.025 46.8738 132.098 46.8736 132.171 46.8736C132.718 46.8736 133.257 46.8833 133.789 46.9028C136.818 47.0136 139.6 47.4401 142.134 48.1822C144.312 48.8196 146.306 49.6898 148.119 50.7928C148.737 51.1693 149.335 51.573 149.911 52.0037C150.573 52.5056 151.194 53.0384 151.775 53.6019ZM155.143 49.9024C160.515 55.0431 163 62.0936 163 70.4052C163 79.1956 159.345 86.5773 152.4 92.2366L152.389 92.2455L152.378 92.2544C144.921 98.2612 135.2 101 123.747 101C117.644 101 112.201 100.539 107.469 99.5624C102.65 98.6052 97.9878 96.9067 93.4909 94.4959L92.4224 93.923L91.7349 92.9243C88.4781 88.1932 86.6694 83.1149 86.6694 77.7658C86.6694 72.2922 88.5943 67.4855 92.5012 63.7325C92.5965 63.6409 92.6924 63.5505 92.7888 63.4612C91.2482 61.991 89.9496 60.2503 88.8872 58.2818C86.9609 54.7127 86 50.8462 86 46.7621C86 36.5278 90.4193 28.3492 98.9839 22.7758L98.9914 22.7709C106.107 18.1585 114.674 16 124.416 16C131.429 16 137.603 16.7543 142.812 18.4027C147.782 19.9391 152.092 21.9931 155.581 24.6756L156.763 25.5849L157.254 26.9934C158.297 29.9845 158.816 33.088 158.816 36.2788C158.816 39.3627 158.403 42.2961 157.507 45.0293C156.931 46.7871 156.155 48.4307 155.143 49.9024Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M223.775 51.6019C227.925 55.6295 230 61.2306 230 68.4052C230 75.6171 227.08 81.6022 221.241 86.3606C214.919 91.4535 206.421 94 195.747 94C189.871 94 184.775 93.5539 180.461 92.6617C176.147 91.8067 171.944 90.2825 167.853 88.0892C165.064 84.0372 163.669 79.9294 163.669 75.7658C163.669 71.5651 165.101 68.0892 167.965 65.3383C168.29 65.026 168.624 64.7315 168.965 64.4547C169.101 64.3445 169.239 64.2371 169.378 64.1326C170.299 63.4381 171.279 62.8675 172.317 62.4207C174.19 61.6148 176.254 61.2119 178.509 61.2119C178.753 61.2119 178.995 61.2148 179.234 61.2206C183.107 61.3142 186.287 62.1664 188.774 63.777C189.467 64.2197 190.113 64.7348 190.711 65.3221C190.716 65.3269 190.721 65.3318 190.726 65.3366C191.457 66.0556 192.116 66.8824 192.705 67.8171C192.768 67.9176 192.831 68.0194 192.893 68.1224C192.91 68.1515 192.927 68.1806 192.945 68.2099C193.327 68.8582 193.678 69.5553 193.997 70.3011C194.247 70.8847 194.477 71.498 194.687 72.1413C195.057 72.074 195.372 71.9711 195.63 71.8327C196.229 71.5124 196.528 71.0019 196.528 70.3011C196.528 69.2602 196.193 68.1078 195.524 66.8439C194.891 65.5428 193.943 64.316 192.679 63.1636C191.946 62.5052 191.156 61.9198 190.308 61.4072C190.303 61.4041 190.298 61.401 190.293 61.3979C187.314 59.601 183.628 58.7026 179.234 58.7026C178.991 58.7026 178.749 58.7061 178.509 58.7132C175.992 58.7872 173.631 59.2483 171.424 60.0967C170.543 59.6499 169.723 59.1132 168.964 58.4867C167.514 57.2887 166.288 55.7622 165.287 53.9071C163.762 51.0818 163 48.0335 163 44.7621C163 36.2119 166.57 29.6134 173.711 24.9665C179.848 20.9888 187.416 19 196.416 19C203.111 19 208.745 19.7249 213.32 21.1747C217.894 22.5874 221.632 24.4089 224.533 26.6394C225.388 29.0929 225.816 31.6394 225.816 34.2788C225.816 36.9182 225.463 39.316 224.756 41.4721C224.646 41.8093 224.527 42.136 224.401 42.4523C224.211 42.9309 224.002 43.3855 223.776 43.8161C223.593 44.1652 223.398 44.4986 223.192 44.8163C222.745 45.5039 222.244 46.1178 221.688 46.658C220.423 45.7286 218.136 44.7807 214.826 43.8141C211.516 42.8476 208.503 42.3643 205.789 42.3643C205.209 42.3643 204.669 42.3719 204.171 42.3872C202.336 42.4434 201.053 42.6031 200.321 42.8662C199.429 43.2007 198.983 43.7212 198.983 44.4275C198.983 44.568 198.992 44.7052 199.012 44.8391C199.039 45.0242 199.085 45.2029 199.15 45.3755C199.727 45.2272 200.377 45.1118 201.1 45.0292C201.11 45.028 201.12 45.0268 201.131 45.0257C201.973 44.9309 202.914 44.8804 203.953 44.8742C204.025 44.8738 204.098 44.8736 204.171 44.8736C204.718 44.8736 205.257 44.8833 205.789 44.9028C208.818 45.0136 211.6 45.4401 214.134 46.1822C216.312 46.8196 218.306 47.6898 220.119 48.7928C220.737 49.1693 221.335 49.573 221.911 50.0037C222.573 50.5056 223.194 51.0384 223.775 51.6019ZM227.143 47.9024C232.515 53.0431 235 60.0936 235 68.4052C235 77.1956 231.345 84.5773 224.4 90.2366L224.389 90.2455L224.378 90.2544C216.921 96.2612 207.2 99 195.747 99C189.644 99 184.201 98.539 179.469 97.5624C174.65 96.6052 169.988 94.9067 165.491 92.4959L164.422 91.923L163.735 90.9243C160.478 86.1932 158.669 81.1149 158.669 75.7658C158.669 70.2922 160.594 65.4855 164.501 61.7325C164.597 61.6409 164.692 61.5505 164.789 61.4612C163.248 59.991 161.95 58.2503 160.887 56.2818C158.961 52.7127 158 48.8462 158 44.7621C158 34.5278 162.419 26.3492 170.984 20.7758L170.991 20.7709C178.107 16.1585 186.674 14 196.416 14C203.429 14 209.603 14.7543 214.812 16.4027C219.782 17.9391 224.092 19.9931 227.581 22.6756L228.763 23.5849L229.254 24.9934C230.297 27.9845 230.816 31.088 230.816 34.2788C230.816 37.3627 230.403 40.2961 229.507 43.0293C228.931 44.7871 228.155 46.4307 227.143 47.9024Z"
					/>
				</svg>
			</Button>
		</Link>
	);
};

export default Logo;